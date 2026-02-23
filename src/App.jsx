import React, { useEffect, useMemo, useRef, useState } from "react";
import Peer from "peerjs";
import * as THREE from "three";

const COLORS = ["red", "blue", "yellow", "green"];
const SAFE_INDICES = new Set([0, 10, 20, 30]);
const START_INDICES = [0, 10, 20, 30];
const MAX_ROOMS = 5;
const BLOCKLIST = ["badword", "hate", "racist", "stupid", "idiot"];
const BAD_WORDS_CACHE_KEY = "badWordsCacheV1";
const BAD_WORDS_CACHE_TTL = 1000 * 60 * 60 * 24 * 7;
const BAD_WORDS_LOCAL_URL = "/bad-words-en.txt";

function cloneGame(game) {
  if (!game) return null;
  if (typeof structuredClone === "function") return structuredClone(game);
  return JSON.parse(JSON.stringify(game));
}

function App() {
  const appVersion = typeof __APP_VERSION__ !== "undefined" ? __APP_VERSION__ : "dev";
  const canvasRef = useRef(null);
  const boardRef = useRef(null);
  const stateRef = useRef({
    peer: null,
    isHost: false,
    connections: new Map(),
    selfId: null,
    selfName: "",
    assignedIndex: null,
    roomId: null,
    game: null,
    board: {
      trackPositions: [],
      homeStretchPositions: [[], [], [], []],
      homeSlots: [[], [], [], []],
      waitingSlots: [[], [], [], []],
    },
    three: {
      renderer: null,
      scene: null,
      camera: null,
      boardGroup: null,
      tokensGroup: null,
      tokenMeshes: [],
      diceMesh: null,
      diceRoll: null,
      raycaster: null,
      pointer: null,
      canvas: null,
      animationId: null,
      zoom: 1,
    },
    mediaStream: null,
    mediaConnections: new Map(),
    speechRecognition: null,
    speechRecognizing: false,
    badWordsSet: new Set(BLOCKLIST),
    advanceTimeout: null,
    joinRetryCount: 0,
    voiceGateOpen: false,
    voiceGateTimer: null,
  });

  const [status, setStatus] = useState("Disconnected");
  const [game, setGame] = useState(null);
  const [assignedIndex, setAssignedIndex] = useState(null);
  const [diceValue, setDiceValue] = useState("–");
  const [turnText, setTurnText] = useState("Waiting for host…");
  const [playerName, setPlayerName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [roomLocked, setRoomLocked] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [voiceWarning, setVoiceWarning] = useState("");
  const [voiceModerationAvailable, setVoiceModerationAvailable] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showSystemNotice, setShowSystemNotice] = useState(false);
  const [systemNoticeText, setSystemNoticeText] = useState("");
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [accessibility, setAccessibility] = useState({
    largeText: false,
    highContrast: false,
    reduceMotion: false,
  });
  const [audioMuted, setAudioMuted] = useState(false);
  const [rooms, setRooms] = useState(() => {
    try {
      const raw = localStorage.getItem("rooms");
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  });
  const chatInputRef = useRef(null);
  const isMobileRef = useRef(false);
  const leftMessageHandledRef = useRef(false);
  const prevRollIdRef = useRef(null);

  const isMyTurn = useMemo(() => {
    if (!game || assignedIndex === null) return false;
    return game.started && game.turnIndex === assignedIndex;
  }, [game, assignedIndex]);

  const isInRoom = useMemo(() => {
    return Boolean(game && assignedIndex !== null);
  }, [game, assignedIndex]);

  const isConnected = useMemo(() => {
    return status.startsWith("Connected");
  }, [status]);

  useEffect(() => {
    const boardEl = boardRef.current;
    const canvas = canvasRef.current;
    if (!boardEl || !canvas) return;
    stateRef.current.three.canvas = canvas;
    computeBoardLayout3D();
    initThree();
    const handleResize = () => {
      computeBoardLayout3D();
      resizeRenderer();
      renderTokens3D();
    };
    window.addEventListener("resize", handleResize);
    loadBadWords();
    const savedA11y = localStorage.getItem("a11ySettings");
    if (savedA11y) {
      try {
        const parsed = JSON.parse(savedA11y);
        setAccessibility({
          largeText: Boolean(parsed.largeText),
          highContrast: Boolean(parsed.highContrast),
          reduceMotion: Boolean(parsed.reduceMotion),
        });
      } catch (_) {
        // ignore
      }
    }
    const media = window.matchMedia("(max-width: 900px)");
    const handleMobileMute = () => {
      isMobileRef.current = media.matches;
      if (media.matches) {
        setAudioMuted(true);
        document.querySelectorAll("audio").forEach((audio) => {
          audio.muted = true;
        });
      }
    };
    handleMobileMute();
    media.addEventListener("change", handleMobileMute);
    return () => {
      window.removeEventListener("resize", handleResize);
      media.removeEventListener("change", handleMobileMute);
      cleanupThree();
      cleanupPeer();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("a11y-large-text", accessibility.largeText);
    document.body.classList.toggle("a11y-high-contrast", accessibility.highContrast);
    document.body.classList.toggle("a11y-reduced-motion", accessibility.reduceMotion);
    localStorage.setItem("a11ySettings", JSON.stringify(accessibility));
  }, [accessibility]);

  useEffect(() => {
    if (!game) {
      setDiceValue("–");
      setTurnText("Waiting for host…");
      leftMessageHandledRef.current = false;
      return;
    }
    setDiceValue(game.dice || "–");
    const current = game.players[game.turnIndex];
    setTurnText(game.started ? `${current.name}'s turn` : game.message);
    renderTokens3D();
    if (game.dice && game.rollId !== prevRollIdRef.current) {
      triggerDiceRoll(game.dice, game.rollId);
    }
    prevRollIdRef.current = game.rollId;
    if (game.message.includes("left the table") && !leftMessageHandledRef.current) {
      leftMessageHandledRef.current = true;
      setSystemNoticeText(game.message);
      setShowSystemNotice(true);
    }
  }, [game, assignedIndex]);

  function updateGame(nextGame, nextAssignedIndex = assignedIndex) {
    stateRef.current.game = nextGame;
    stateRef.current.assignedIndex = nextAssignedIndex;
    setGame(cloneGame(nextGame));
    setAssignedIndex(nextAssignedIndex);
    if (stateRef.current.three.diceMesh) {
      stateRef.current.three.diceMesh.visible = Boolean(nextGame && nextGame.started);
    }
  }

  function saveRooms(nextRooms) {
    const unique = [...new Set(nextRooms)];
    const trimmed = unique.slice(0, MAX_ROOMS);
    setRooms(trimmed);
    try {
      localStorage.setItem("rooms", JSON.stringify(trimmed));
    } catch (_) {
      // ignore
    }
  }

  async function loadBadWords() {
    try {
      const cached = localStorage.getItem(BAD_WORDS_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < BAD_WORDS_CACHE_TTL) {
          stateRef.current.badWordsSet = new Set(parsed.words);
          return;
        }
      }
    } catch (_) {
      // ignore
    }

    try {
      const text = await fetch(BAD_WORDS_LOCAL_URL).then((r) => r.text());
      const words = text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((word) => word.toLowerCase());
      stateRef.current.badWordsSet = new Set(words);
      localStorage.setItem(
        BAD_WORDS_CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), words })
      );
    } catch (_) {
      stateRef.current.badWordsSet = new Set(BLOCKLIST);
    }
  }

  function initGame(players) {
    return {
      started: false,
      players,
      turnIndex: 0,
      dice: null,
      rollId: 0,
      message: "Waiting to start",
    };
  }

  function basePlayers(hostName) {
    return [
      {
        id: stateRef.current.selfId,
        name: hostName || "Host",
        color: COLORS[0],
        tokens: [-1, -1, -1, -1],
        connected: true,
      },
    ];
  }

  function createPeer(desiredId) {
    const peer = desiredId ? new Peer(desiredId) : new Peer();
    peer.on("open", (id) => {
      stateRef.current.selfId = id;
      setStatus(`Connected (${id})`);
      if (stateRef.current.isHost) {
        setRoomId(id);
        setRoomLocked(true);
        if (!rooms.includes(id)) {
          saveRooms([...rooms, id]);
        }
      }
    });
    peer.on("connection", (conn) => handleConnection(conn));
    peer.on("call", (call) => {
      if (stateRef.current.mediaStream) {
        call.answer(stateRef.current.mediaStream);
      } else {
        call.answer();
      }
      call.on("stream", (stream) => attachRemoteAudio(call.peer, stream));
      stateRef.current.mediaConnections.set(call.peer, call);
    });
    peer.on("error", (err) => {
      if (err.type === "unavailable-id" && desiredId) {
        setStatus("Room already exists. Joining instead.");
        peer.destroy();
        joinExistingRoom(desiredId);
        return;
      }
      setStatus("Peer error");
    });
    stateRef.current.peer = peer;
  }

  function joinExistingRoom(existingId) {
    stateRef.current.isHost = false;
    stateRef.current.roomId = existingId;
    setRoomId(existingId);
    setRoomLocked(true);
    const peer = new Peer();
    peer.on("open", () => {
      stateRef.current.peer = peer;
      const conn = peer.connect(existingId);
      handleConnection(conn);
      conn.on("open", () => {
        conn.send({ type: "join", name: stateRef.current.selfName || "Guest" });
      });
    });
    peer.on("error", () => {
      setStatus("Peer error");
    });
  }

  function retryJoinWithNewName() {
    if (!stateRef.current.roomId) return;
    if (stateRef.current.joinRetryCount >= 3) {
      setStatus("Name still taken. Please pick another name.");
      return;
    }
    stateRef.current.joinRetryCount += 1;
    const suffix = Math.floor(Math.random() * 1000);
    const base = (playerName || stateRef.current.selfName || "Player").trim();
    const newName = `${base}${suffix}`;
    stateRef.current.selfName = newName;
    setPlayerName(newName);
    if (stateRef.current.peer) {
      stateRef.current.peer.destroy();
      stateRef.current.peer = null;
    }
    const peer = new Peer();
    peer.on("open", () => {
      stateRef.current.peer = peer;
      const conn = peer.connect(stateRef.current.roomId);
      handleConnection(conn);
      conn.on("open", () => {
        conn.send({ type: "join", name: stateRef.current.selfName || "Guest" });
      });
    });
    peer.on("error", () => {
      setStatus("Peer error");
    });
  }

  function cleanupPeer() {
    const { peer } = stateRef.current;
    if (peer) peer.destroy();
    stateRef.current.peer = null;
  }

  function handleConnection(conn) {
    conn.on("data", (payload) => handleMessage(conn, payload));
    conn.on("open", () => {
      stateRef.current.connections.set(conn.peer, conn);
      if (stateRef.current.isHost) {
        conn.send({ type: "hello", name: stateRef.current.selfName, host: true });
      }
      if (stateRef.current.mediaStream) {
        const call = stateRef.current.peer.call(conn.peer, stateRef.current.mediaStream);
        call.on("stream", (stream) => attachRemoteAudio(conn.peer, stream));
        stateRef.current.mediaConnections.set(conn.peer, call);
      }
    });
    conn.on("close", () => {
      stateRef.current.connections.delete(conn.peer);
      if (stateRef.current.isHost) markPlayerDisconnected(conn.peer);
      if (!stateRef.current.isHost) cleanupSession();
    });
  }

  function sendToHost(message) {
    if (!stateRef.current.peer || stateRef.current.isHost) return;
    const conn = stateRef.current.connections.get(stateRef.current.roomId);
    if (conn && conn.open) conn.send(message);
  }

  function broadcastState() {
    const currentGame = stateRef.current.game;
    currentGame.players.forEach((player) => {
      if (player.id === stateRef.current.selfId) return;
      const conn = stateRef.current.connections.get(player.id);
      if (conn && conn.open) {
        conn.send({
          type: "state",
          state: currentGame,
          assignedIndex: currentGame.players.findIndex((p) => p.id === player.id),
        });
      }
    });
    updateGame(currentGame, stateRef.current.isHost ? 0 : stateRef.current.assignedIndex);
  }

  function handleMessage(conn, payload) {
    if (!payload || typeof payload !== "object") return;
    if (payload.type === "hello" && !stateRef.current.isHost) {
      setStatus(`Connected to ${conn.peer}`);
      return;
    }
    if (payload.type === "reject") {
      const reason = payload.reason || "Connection rejected.";
      setStatus(reason);
      if (!stateRef.current.isHost && reason.toLowerCase().includes("name already taken")) {
        retryJoinWithNewName();
      }
      return;
    }

    if (stateRef.current.isHost) {
      if (payload.type === "join") {
        const incomingName = (payload.name || "").trim();
        const nameTaken = stateRef.current.game?.players.some(
          (player) => player.name.toLowerCase() === incomingName.toLowerCase()
        );
        if (nameTaken) {
          conn.send({ type: "reject", reason: "Name already taken." });
          conn.close();
          return;
        }
        assignPlayer(conn, payload.name);
      }
      if (payload.type === "action") {
        handleAction(payload.action, payload.payload, conn.peer);
      }
      if (payload.type === "chat") {
        handleChatMessage(payload, conn.peer);
      }
    } else if (payload.type === "state") {
      updateGame(payload.state, payload.assignedIndex);
    } else if (payload.type === "chat") {
      appendChat(payload.name, payload.text, payload.from);
    }
  }

  function assignPlayer(conn, name) {
    if (!stateRef.current.game) {
      stateRef.current.game = initGame(basePlayers(stateRef.current.selfName));
    }
    if (stateRef.current.game.players.length >= 4) {
      conn.send({ type: "state", state: stateRef.current.game, assignedIndex: null });
      return;
    }

    const index = stateRef.current.game.players.length;
    stateRef.current.game.players.push({
      id: conn.peer,
      name: name || `Player ${index + 1}`,
      color: COLORS[index],
      tokens: [-1, -1, -1, -1],
      connected: true,
    });
    conn.send({ type: "state", state: stateRef.current.game, assignedIndex: index });
    broadcastState();
  }

  function markPlayerDisconnected(peerId) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return;
    const player = currentGame.players.find((p) => p.id === peerId);
    if (player) player.connected = false;
    broadcastState();
  }

  function handleAction(action, payload, fromId) {
    if (!stateRef.current.game) return;
    const playerIndex = stateRef.current.game.players.findIndex((p) => p.id === fromId);
    if (action !== "leave" && playerIndex !== stateRef.current.game.turnIndex) return;
    if (action === "roll") {
      if (!stateRef.current.game.started) startGame();
      rollDice();
    }
    if (action === "move") {
      if (!stateRef.current.game.started) return;
      moveToken(playerIndex, payload.tokenIndex);
    }
    if (action === "leave") {
      handleLeave(fromId);
    }
  }

  function handleChatMessage(payload, fromId) {
    const text = payload.text || "";
    if (!isChatClean(text)) {
      const conn = stateRef.current.connections.get(fromId);
      if (conn && conn.open) {
        conn.send({ type: "chat", name: "System", text: "Message blocked by safety filter.", from: "system" });
      }
      return;
    }
    appendChat(payload.name, text, fromId);
    broadcastChat(payload.name, text, fromId);
  }

  function broadcastChat(name, text, fromId) {
    stateRef.current.connections.forEach((conn) => {
      if (conn.open) conn.send({ type: "chat", name, text, from: fromId });
    });
  }

  function appendChat(name, text, from) {
    setChatLog((prev) => [
      ...prev.slice(-60),
      { id: `${Date.now()}-${Math.random()}`, name, text, from },
    ]);
  }

  function isChatClean(text) {
    const lower = text.toLowerCase();
    const words = stateRef.current.badWordsSet || new Set(BLOCKLIST);
    for (const word of words) {
      if (word && lower.includes(word)) return false;
    }
    return true;
  }

  function rollDice() {
    const currentGame = stateRef.current.game;
    if (!currentGame || currentGame.dice !== null) return;
    currentGame.dice = Math.floor(Math.random() * 6) + 1;
    currentGame.rollId = (currentGame.rollId || 0) + 1;
    currentGame.message = `Rolled ${currentGame.dice}`;
    const moves = getMovableTokens(currentGame.turnIndex, currentGame.dice);
    if (moves.length === 0) {
      if (stateRef.current.advanceTimeout) {
        clearTimeout(stateRef.current.advanceTimeout);
      }
      stateRef.current.advanceTimeout = window.setTimeout(() => {
        advanceTurn();
        broadcastState();
        stateRef.current.advanceTimeout = null;
      }, 900);
    }
    broadcastState();
  }

  function advanceTurn(extraTurn = false) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return;
    if (!extraTurn) {
      currentGame.turnIndex = (currentGame.turnIndex + 1) % currentGame.players.length;
    }
    currentGame.dice = null;
    currentGame.message = "Next turn";
  }

  function moveToken(playerIndex, tokenIndex) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return;
    const roll = currentGame.dice;
    if (!roll) return;
    const moves = getMovableTokens(playerIndex, roll);
    if (!moves.includes(tokenIndex)) return;
    const player = currentGame.players[playerIndex];
    const currentPos = player.tokens[tokenIndex];
    const nextPos = computeNextPosition(playerIndex, currentPos, roll);
    if (nextPos === null) return;
    if (nextPos.kind === "track") {
      const targetGlobal = toGlobalIndex(playerIndex, nextPos.value);
      const occupant = findOccupant(targetGlobal);
      if (occupant && !SAFE_INDICES.has(targetGlobal)) {
        currentGame.players[occupant.playerIndex].tokens[occupant.tokenIndex] = -1;
      }
      player.tokens[tokenIndex] = nextPos.value;
    } else {
      player.tokens[tokenIndex] = 40 + nextPos.value;
    }

    if (checkWin(player)) {
      currentGame.message = `${player.name} wins!`;
      currentGame.started = false;
    } else {
      advanceTurn(roll === 6);
    }
    broadcastState();
  }

  function checkWin(player) {
    return player.tokens.every((pos) => pos >= 43);
  }

  function computeNextPosition(playerIndex, currentPos, roll) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return null;
    if (currentPos === -1) {
      if (roll !== 6) return null;
      const targetGlobal = START_INDICES[playerIndex];
      if (isOccupiedByOwn(playerIndex, targetGlobal)) return null;
      if (SAFE_INDICES.has(targetGlobal) && isOccupiedByOpponent(targetGlobal)) return null;
      return { kind: "track", value: 0 };
    }
    if (currentPos >= 0 && currentPos <= 39) {
      const candidate = currentPos + roll;
      if (candidate <= 39) {
        const targetGlobal = toGlobalIndex(playerIndex, candidate);
        if (isOccupiedByOwn(playerIndex, targetGlobal)) return null;
        if (SAFE_INDICES.has(targetGlobal) && isOccupiedByOpponent(targetGlobal)) return null;
        return { kind: "track", value: candidate };
      }
      const homeCandidate = candidate - 40;
      if (homeCandidate > 3) return null;
      if (isHomeOccupied(playerIndex, homeCandidate)) return null;
      return { kind: "home", value: homeCandidate };
    }
    if (currentPos >= 40 && currentPos <= 43) {
      const homeIndex = currentPos - 40;
      const target = homeIndex + roll;
      if (target > 3) return null;
      if (isHomeOccupied(playerIndex, target)) return null;
      return { kind: "home", value: target };
    }
    return null;
  }

  function getMovableTokens(playerIndex, roll) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return [];
    const player = currentGame.players[playerIndex];
    const movable = [];
    player.tokens.forEach((pos, tokenIndex) => {
      const next = computeNextPosition(playerIndex, pos, roll);
      if (next) movable.push(tokenIndex);
    });
    return movable;
  }

  function toGlobalIndex(playerIndex, localIndex) {
    return (START_INDICES[playerIndex] + localIndex) % 40;
  }

  function findOccupant(globalIndex) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return null;
    for (let p = 0; p < currentGame.players.length; p += 1) {
      const player = currentGame.players[p];
      for (let t = 0; t < player.tokens.length; t += 1) {
        const pos = player.tokens[t];
        if (pos >= 0 && pos <= 39) {
          if (toGlobalIndex(p, pos) === globalIndex) {
            return { playerIndex: p, tokenIndex: t };
          }
        }
      }
    }
    return null;
  }

  function isOccupiedByOwn(playerIndex, globalIndex) {
    const occupant = findOccupant(globalIndex);
    return occupant && occupant.playerIndex === playerIndex;
  }

  function isOccupiedByOpponent(globalIndex) {
    const occupant = findOccupant(globalIndex);
    return occupant && occupant.playerIndex !== null;
  }

  function isHomeOccupied(playerIndex, homeIndex) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return false;
    return currentGame.players[playerIndex].tokens.some((pos) => pos === 40 + homeIndex);
  }

  function startGame() {
    const currentGame = stateRef.current.game;
    if (!currentGame) return;
    currentGame.started = true;
    currentGame.message = "Game started";
    currentGame.turnIndex = 0;
    currentGame.dice = null;
    if (stateRef.current.three.diceMesh) {
      stateRef.current.three.diceMesh.visible = true;
    }
    broadcastState();
  }

  function computeBoardLayout3D() {
    stateRef.current.board.trackPositions = [];
    stateRef.current.board.homeStretchPositions = [[], [], [], []];
    stateRef.current.board.homeSlots = [[], [], [], []];
    stateRef.current.board.waitingSlots = [[], [], [], []];

    const trackRadius = 48;
    for (let i = 0; i < 40; i += 1) {
      const angle = (i / 40) * Math.PI * 2 - Math.PI / 2;
      stateRef.current.board.trackPositions.push(new THREE.Vector3(
        Math.cos(angle) * trackRadius,
        2.2,
        Math.sin(angle) * trackRadius,
      ));
    }

    const homeAngles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
    const homeRadii = [32, 24, 16, 8];
    homeAngles.forEach((angle, playerIndex) => {
      stateRef.current.board.homeStretchPositions[playerIndex] = homeRadii.map((radius) =>
        new THREE.Vector3(
          Math.cos(angle) * radius,
          2.4,
          Math.sin(angle) * radius,
        )
      );
    });

    const slotOffset = 62;
    const slotGap = 7.5;
    const corners = [
      { x: -slotOffset, z: -slotOffset },
      { x: slotOffset, z: -slotOffset },
      { x: slotOffset, z: slotOffset },
      { x: -slotOffset, z: slotOffset },
    ];
    corners.forEach((corner, playerIndex) => {
      const positions = [];
      for (let row = 0; row < 2; row += 1) {
        for (let col = 0; col < 2; col += 1) {
          positions.push(new THREE.Vector3(
            corner.x + (col - 0.5) * slotGap,
            2.4,
            corner.z + (row - 0.5) * slotGap,
          ));
        }
      }
      stateRef.current.board.homeSlots[playerIndex] = positions;
    });

    const waitingGap = 5.5;
    const waitingOffset = 70;
    const sideCenters = [
      { x: 0, z: -waitingOffset, axis: "x" },
      { x: waitingOffset, z: 0, axis: "z" },
      { x: 0, z: waitingOffset, axis: "x" },
      { x: -waitingOffset, z: 0, axis: "z" },
    ];
    for (let playerIndex = 0; playerIndex < 4; playerIndex += 1) {
      const positions = [];
      const side = sideCenters[playerIndex];
      for (let i = 0; i < 4; i += 1) {
        const offset = (i - 1.5) * waitingGap;
        const x = side.axis === "x" ? side.x + offset : side.x;
        const z = side.axis === "z" ? side.z + offset : side.z;
        positions.push(new THREE.Vector3(x, 2.4, z));
      }
      stateRef.current.board.waitingSlots[playerIndex] = positions;
    }
  }

  function initThree() {
    const canvas = stateRef.current.three.canvas;
    if (!canvas) return;
    if (!stateRef.current.three.renderer) {
      stateRef.current.three.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      stateRef.current.three.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      stateRef.current.three.scene = new THREE.Scene();
      stateRef.current.three.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
      stateRef.current.three.camera.position.set(0, 110, 130);
      stateRef.current.three.camera.lookAt(0, 0, 0);
      const ambient = new THREE.AmbientLight(0xffffff, 0.8);
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(60, 120, 80);
      const rim = new THREE.DirectionalLight(0xfff2d6, 0.6);
      rim.position.set(-80, 60, -100);
      stateRef.current.three.scene.add(ambient, dir, rim);
      stateRef.current.three.raycaster = new THREE.Raycaster();
      stateRef.current.three.pointer = new THREE.Vector2();
      canvas.addEventListener("click", onCanvasClick);
      canvas.addEventListener("wheel", onCanvasWheel, { passive: false });
    }
    resizeRenderer();

    if (stateRef.current.three.boardGroup) {
      stateRef.current.three.scene.remove(stateRef.current.three.boardGroup);
    }
    stateRef.current.three.boardGroup = buildBoardMesh();
    stateRef.current.three.scene.add(stateRef.current.three.boardGroup);

    if (!stateRef.current.three.diceMesh) {
      stateRef.current.three.diceMesh = buildDiceMesh();
      stateRef.current.three.scene.add(stateRef.current.three.diceMesh);
    }
    if (!stateRef.current.three.animationId) animateThree();
  }

  function resizeRenderer() {
    const canvas = stateRef.current.three.canvas;
    const boardEl = boardRef.current;
    if (!canvas || !boardEl) return;
    const rect = boardEl.getBoundingClientRect();
    stateRef.current.three.renderer.setSize(rect.width, rect.height, false);
    stateRef.current.three.camera.aspect = rect.width / rect.height;
    stateRef.current.three.camera.updateProjectionMatrix();
  }

  function cleanupThree() {
    if (stateRef.current.three.animationId) {
      cancelAnimationFrame(stateRef.current.three.animationId);
    }
  }

  function buildBoardMesh() {
    const group = new THREE.Group();
    const baseGeo = new THREE.BoxGeometry(120, 8, 120);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0xf4e5d0, roughness: 0.7, metalness: 0.05 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -4;
    group.add(base);

    const inlayGeo = new THREE.BoxGeometry(108, 2.8, 108);
    const inlayMat = new THREE.MeshStandardMaterial({ color: 0xf9f1e6, roughness: 0.5, metalness: 0.05 });
    const inlay = new THREE.Mesh(inlayGeo, inlayMat);
    inlay.position.y = 0.6;
    group.add(inlay);

    const cellGeo = new THREE.CylinderGeometry(2.8, 3.1, 2.4, 18);
    const cellMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.1 });
    const safeMat = new THREE.MeshStandardMaterial({ color: 0xf4d9b0, roughness: 0.4, metalness: 0.1, emissive: 0xffc870, emissiveIntensity: 0.18 });
    stateRef.current.board.trackPositions.forEach((pos, index) => {
      const cell = new THREE.Mesh(cellGeo, SAFE_INDICES.has(index) ? safeMat : cellMat);
      cell.position.copy(pos);
      group.add(cell);
    });

    const homeColors = [0xd9413a, 0x2578c2, 0xe2a600, 0x2f8b57];
    const homeGeo = new THREE.BoxGeometry(18, 2.6, 18);
    homeColors.forEach((color, i) => {
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.1 });
      const tile = new THREE.Mesh(homeGeo, mat);
      const angle = (-Math.PI / 2) + (i * Math.PI) / 2;
      const r = 30;
      tile.position.set(Math.cos(angle) * r, 1.1, Math.sin(angle) * r);
      group.add(tile);
    });
    return group;
  }

  function buildDiceMesh() {
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const materials = createDiceMaterials();
    const dice = new THREE.Mesh(geometry, materials);
    dice.position.set(0, 16, 0);
    return dice;
  }

  function animateThree() {
    const { renderer, scene, camera } = stateRef.current.three;
    if (!renderer || !scene || !camera) return;
    stateRef.current.three.animationId = requestAnimationFrame(animateThree);
    animateCamera();
    animateTokenMeshes();
    animateDice();
    renderer.render(scene, camera);
  }

  function animateCamera() {
    const radius = 150 * stateRef.current.three.zoom;
    const y = 110 * stateRef.current.three.zoom;
    const index = stateRef.current.assignedIndex ?? 0;
    const angle = (-Math.PI / 2) + (index * Math.PI) / 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    stateRef.current.three.camera.position.set(x, y, z);
    stateRef.current.three.camera.lookAt(0, 0, 0);
  }

  function ensureTokenMeshes() {
    if (!stateRef.current.game || !stateRef.current.three.scene) return;
    const totalTokens = stateRef.current.game.players.length * 4;
    if (stateRef.current.three.tokensGroup && stateRef.current.three.tokenMeshes.length === totalTokens) {
      return;
    }
    if (stateRef.current.three.tokensGroup) {
      stateRef.current.three.scene.remove(stateRef.current.three.tokensGroup);
    }

    const tokensGroup = new THREE.Group();
    const tokenGeo = new THREE.SphereGeometry(3.1, 24, 24);
    stateRef.current.three.tokenMeshes = [];

    stateRef.current.game.players.forEach((player, playerIndex) => {
      const color = tokenColor(player.color);
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.35,
        metalness: 0.1,
        emissive: 0x000000,
      });
      for (let tokenIndex = 0; tokenIndex < 4; tokenIndex += 1) {
        const mesh = new THREE.Mesh(tokenGeo, mat.clone());
        mesh.userData = { playerIndex, tokenIndex, selectable: false, target: null };
        const startPos = resolveTokenPosition3D(playerIndex, -1, tokenIndex);
        mesh.position.copy(startPos);
        tokensGroup.add(mesh);
        stateRef.current.three.tokenMeshes.push(mesh);
      }
    });
    stateRef.current.three.tokensGroup = tokensGroup;
    stateRef.current.three.scene.add(tokensGroup);
  }

  function renderTokens3D() {
    if (!stateRef.current.game || !stateRef.current.three.scene) return;
    ensureTokenMeshes();
    const current = stateRef.current.game.turnIndex;
    const roll = stateRef.current.game.dice;
    const selectable = stateRef.current.game.started && roll && stateRef.current.assignedIndex === current
      ? getMovableTokens(current, roll)
      : [];

    stateRef.current.three.tokenMeshes.forEach((mesh) => {
      const { playerIndex, tokenIndex } = mesh.userData;
      const pos = stateRef.current.game.players[playerIndex].tokens[tokenIndex];
      const target = resolveTokenPosition3D(playerIndex, pos, tokenIndex);
      mesh.userData.target = target.clone();
      const isSelectable = playerIndex === stateRef.current.assignedIndex && selectable.includes(tokenIndex);
      mesh.userData.selectable = isSelectable;
      mesh.scale.setScalar(isSelectable ? 1.2 : 1);
      if (mesh.material && mesh.material.emissive) {
        mesh.material.emissive.setHex(isSelectable ? 0x2244ff : 0x000000);
        mesh.material.emissiveIntensity = isSelectable ? 0.35 : 0.0;
      }
    });
  }

  function animateTokenMeshes() {
    if (!stateRef.current.three.tokenMeshes.length) return;
    stateRef.current.three.tokenMeshes.forEach((mesh) => {
      const target = mesh.userData.target;
      if (!target) return;
      mesh.position.lerp(target, 0.2);
    });
  }

  function animateDice() {
    const { diceMesh, diceRoll } = stateRef.current.three;
    if (!diceMesh || !diceRoll) return;
    const now = performance.now();
    const elapsed = now - diceRoll.start;
    const progress = Math.min(elapsed / diceRoll.duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const spinAngle = Math.PI * 2 * 3 * ease;
    const tiltAngle = Math.PI * 2 * ease;
    const spin = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spinAngle);
    const tilt = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), tiltAngle);
    const animQuat = spin.multiply(tilt).multiply(diceRoll.targetQuat);
    diceMesh.quaternion.copy(animQuat);
    if (progress >= 1) {
      diceMesh.quaternion.copy(diceRoll.targetQuat);
      stateRef.current.three.diceRoll = null;
    }
  }

  function triggerDiceRoll(value) {
    if (!stateRef.current.three.diceMesh) return;
    const targetQuat = diceTargetQuaternion(value || 1);
    stateRef.current.three.diceRoll = {
      start: performance.now(),
      duration: 750,
      targetQuat,
    };
  }

  function diceTargetQuaternion(value) {
    const up = new THREE.Vector3(0, 1, 0);
    const normals = {
      1: new THREE.Vector3(0, 1, 0),
      2: new THREE.Vector3(1, 0, 0),
      3: new THREE.Vector3(0, 0, 1),
      4: new THREE.Vector3(0, 0, -1),
      5: new THREE.Vector3(-1, 0, 0),
      6: new THREE.Vector3(0, -1, 0),
    };
    const face = normals[value] || normals[1];
    const align = new THREE.Quaternion().setFromUnitVectors(face, up);
    return align;
  }

  function createDiceMaterials() {
    const textures = [
      createDiceFaceTexture(2),
      createDiceFaceTexture(5),
      createDiceFaceTexture(1),
      createDiceFaceTexture(6),
      createDiceFaceTexture(3),
      createDiceFaceTexture(4),
    ];
    return textures.map(
      (map) => new THREE.MeshStandardMaterial({ map, roughness: 0.45, metalness: 0.05 })
    );
  }

  function createDiceFaceTexture(value) {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#111827";
    const pipRadius = size * 0.06;
    const positions = {
      1: [[0.5, 0.5]],
      2: [[0.28, 0.28], [0.72, 0.72]],
      3: [[0.28, 0.28], [0.5, 0.5], [0.72, 0.72]],
      4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]],
      5: [[0.28, 0.28], [0.72, 0.28], [0.5, 0.5], [0.28, 0.72], [0.72, 0.72]],
      6: [[0.28, 0.25], [0.72, 0.25], [0.28, 0.5], [0.72, 0.5], [0.28, 0.75], [0.72, 0.75]],
    };
    positions[value].forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x * size, y * size, pipRadius, 0, Math.PI * 2);
      ctx.fill();
    });
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  function onCanvasClick(event) {
    const currentGame = stateRef.current.game;
    if (!currentGame || !currentGame.started) return;
    const { raycaster, pointer, camera, canvas } = stateRef.current.three;
    if (!raycaster || !pointer || !camera || !canvas) return;
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(stateRef.current.three.tokenMeshes, false);
    if (!intersects.length) return;
    const mesh = intersects[0].object;
    const { playerIndex, tokenIndex } = mesh.userData;
    if (playerIndex !== stateRef.current.assignedIndex) return;
    const roll = currentGame.dice;
    if (!roll) return;
    const selectable = getMovableTokens(currentGame.turnIndex, roll);
    if (!selectable.includes(tokenIndex)) return;
    if (stateRef.current.isHost) {
      moveToken(playerIndex, tokenIndex);
    } else {
      sendToHost({ type: "action", action: "move", payload: { tokenIndex } });
    }
  }

  function onCanvasWheel(event) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    stateRef.current.three.zoom = Math.min(1.4, Math.max(0.7, stateRef.current.three.zoom + delta * 0.05));
  }

  function resolveTokenPosition3D(playerIndex, pos, tokenIndex) {
    if (pos === -1) {
      return stateRef.current.board.waitingSlots[playerIndex][tokenIndex].clone();
    }
    if (pos >= 0 && pos <= 39) {
      const globalIndex = toGlobalIndex(playerIndex, pos);
      return stateRef.current.board.trackPositions[globalIndex].clone();
    }
    if (pos >= 40 && pos <= 43) {
      const homeIndex = pos - 40;
      return stateRef.current.board.homeStretchPositions[playerIndex][homeIndex].clone();
    }
    return new THREE.Vector3(0, 2.4, 0);
  }

  function tokenColor(color) {
    switch (color) {
      case "red":
        return 0xd9413a;
      case "blue":
        return 0x2578c2;
      case "yellow":
        return 0xe2a600;
      case "green":
        return 0x2f8b57;
      default:
        return 0x888888;
    }
  }

  function handleHost() {
    if (showDisclaimer) return;
    if (!playerName.trim()) {
      setStatus("Enter your name before hosting.");
      return;
    }
    stateRef.current.isHost = true;
    stateRef.current.selfName = playerName.trim();
    const desiredRoom = roomId.trim() || generateRoomName();
    setRoomId(desiredRoom);
    setRoomLocked(true);
    createPeer(desiredRoom);
    const newGame = initGame(basePlayers(stateRef.current.selfName));
    updateGame(newGame, 0);
  }

  function handleJoin() {
    if (showDisclaimer) return;
    if (!playerName.trim()) {
      setStatus("Enter your name before joining.");
      return;
    }
    if (!roomId.trim()) return;
    stateRef.current.isHost = false;
    stateRef.current.selfName = playerName.trim();
    stateRef.current.joinRetryCount = 0;
    stateRef.current.roomId = roomId.trim();
    createPeer();
    stateRef.current.peer.on("open", () => {
      const conn = stateRef.current.peer.connect(stateRef.current.roomId);
      handleConnection(conn);
      conn.on("open", () => {
        conn.send({
          type: "join",
          name: stateRef.current.selfName || "Guest",
        });
        if (!rooms.includes(stateRef.current.roomId)) {
          saveRooms([stateRef.current.roomId, ...rooms]);
        }
      });
    });
  }

  function cleanupSession() {
    cleanupPeer();
    stateRef.current.connections.clear();
    stateRef.current.isHost = false;
    stateRef.current.selfId = null;
    stateRef.current.assignedIndex = null;
    stateRef.current.roomId = null;
    stateRef.current.game = null;
    if (stateRef.current.advanceTimeout) {
      clearTimeout(stateRef.current.advanceTimeout);
      stateRef.current.advanceTimeout = null;
    }
    if (stateRef.current.three.tokensGroup && stateRef.current.three.scene) {
      stateRef.current.three.scene.remove(stateRef.current.three.tokensGroup);
    }
    stateRef.current.three.tokensGroup = null;
    stateRef.current.three.tokenMeshes = [];
    stateRef.current.three.diceRoll = null;
    if (stateRef.current.three.diceMesh) {
      stateRef.current.three.diceMesh.visible = false;
      stateRef.current.three.diceMesh.rotation.set(0, 0, 0);
    }
    setRoomLocked(false);
    setRoomId("");
    setStatus("Disconnected");
    setChatLog([]);
    setChatInput("");
    setVoiceWarning("");
    setVoiceEnabled(false);
    setAudioMuted(false);
    updateGame(null, null);
  }

  function handleLeave(peerId) {
    const currentGame = stateRef.current.game;
    if (!currentGame) return;
    const leavingPlayer = currentGame.players.find((player) => player.id === peerId);
    const leavingName = leavingPlayer ? leavingPlayer.name : "Player";
    if (stateRef.current.advanceTimeout) {
      clearTimeout(stateRef.current.advanceTimeout);
      stateRef.current.advanceTimeout = null;
    }
    const remaining = currentGame.players.filter((player) => player.id !== peerId);
    const resetPlayers = remaining.map((player) => ({
      ...player,
      tokens: [-1, -1, -1, -1],
      connected: true,
    }));
    const newGame = initGame(resetPlayers);
    newGame.message = `${leavingName} left the table and doesn’t want to play.`;
    stateRef.current.game = newGame;
    if (peerId === stateRef.current.selfId) {
      stateRef.current.assignedIndex = null;
    }
    const conn = stateRef.current.connections.get(peerId);
    if (conn) conn.close();
    if (stateRef.current.three.diceMesh) {
      stateRef.current.three.diceMesh.rotation.set(0, 0, 0);
      stateRef.current.three.diceRoll = null;
    }
    broadcastState();
  }

  function leaveRoom() {
    if (!stateRef.current.game) return;
    if (stateRef.current.isHost) {
      handleLeave(stateRef.current.selfId);
    } else {
      sendToHost({ type: "action", action: "leave", payload: {} });
      cleanupSession();
    }
  }

  function resetPeer() {
    leaveRoom();
  }

  function generateRoomName() {
    const adjectives = ["sunny", "brave", "rapid", "lucky", "bright", "calm", "spark", "nova"];
    const nouns = ["forest", "comet", "tiger", "river", "pulse", "nebula", "rider", "glow"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective}-${noun}`;
  }

  function handleRoll() {
    if (showDisclaimer) return;
    if (!stateRef.current.game) return;
    if (stateRef.current.isHost) {
      if (!stateRef.current.game.started) startGame();
      rollDice();
    } else {
      sendToHost({ type: "action", action: "roll", payload: {} });
    }
  }

  function handleChatSend() {
    const text = chatInput.trim();
    if (!text) return;
    if (!isChatClean(text)) {
      appendChat("System", "Message blocked by safety filter.", "system");
      setChatInput("");
      return;
    }
    if (stateRef.current.isHost) {
      appendChat(playerName || "Host", text, stateRef.current.selfId || "me");
      broadcastChat(playerName || "Host", text, stateRef.current.selfId || "me");
    } else {
      sendToHost({ type: "chat", name: playerName || "Guest", text });
    }
    setChatInput("");
  }

  async function enableVoice() {
    if (audioMuted) {
      setVoiceWarning("Unmute to enable voice.");
      return;
    }
    if (stateRef.current.mediaStream) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceModerationAvailable(false);
      setVoiceWarning("Voice moderation unavailable. Mic disabled.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getAudioTracks().forEach((track) => {
        track.enabled = false;
      });
      stateRef.current.mediaStream = stream;
      stateRef.current.voiceGateOpen = false;
      setVoiceEnabled(true);
      setVoiceWarning("");
      stateRef.current.connections.forEach((conn) => {
        const call = stateRef.current.peer.call(conn.peer, stream);
        call.on("stream", (remoteStream) => attachRemoteAudio(conn.peer, remoteStream));
        stateRef.current.mediaConnections.set(conn.peer, call);
      });
      initSpeechModeration();
    } catch (error) {
      setVoiceWarning("Microphone permission denied.");
    }
  }

  function togglePushToTalk(active) {
    if (audioMuted) return;
    if (!stateRef.current.mediaStream) return;
    if (active) {
      stateRef.current.voiceGateOpen = false;
      stateRef.current.mediaStream.getAudioTracks().forEach((track) => {
        track.enabled = false;
      });
      startSpeechModeration();
      if (stateRef.current.voiceGateTimer) {
        clearTimeout(stateRef.current.voiceGateTimer);
      }
      stateRef.current.voiceGateTimer = window.setTimeout(() => {
        if (!stateRef.current.voiceGateOpen) {
          stopSpeechModeration();
          setVoiceWarning("Voice moderation not detected. Mic disabled.");
        }
        stateRef.current.voiceGateTimer = null;
      }, 1000);
    } else {
      stateRef.current.mediaStream.getAudioTracks().forEach((track) => {
        track.enabled = false;
      });
      stateRef.current.voiceGateOpen = false;
      stopSpeechModeration();
    }
  }

  function attachRemoteAudio(peerId, stream) {
    let audio = document.getElementById(`audio-${peerId}`);
    if (!audio) {
      audio = document.createElement("audio");
      audio.id = `audio-${peerId}`;
      audio.autoplay = true;
      audio.playsInline = true;
      document.body.appendChild(audio);
    }
    audio.srcObject = stream;
    audio.muted = audioMuted;
  }

  function toggleMuteAll() {
    if (isMobileRef.current) return;
    const nextMuted = !audioMuted;
    setAudioMuted(nextMuted);
    document.querySelectorAll("audio").forEach((audio) => {
      audio.muted = nextMuted;
    });
    if (nextMuted) {
      togglePushToTalk(false);
      setVoiceWarning("Audio muted.");
    } else {
      setVoiceWarning("");
    }
  }

  function initSpeechModeration() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceModerationAvailable(false);
      setVoiceWarning("Voice moderation unavailable. Mic disabled.");
      return;
    }
    if (stateRef.current.speechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        transcript += event.results[i][0].transcript;
      }
      if (!isChatClean(transcript)) {
        if (stateRef.current.mediaStream) {
          stateRef.current.mediaStream.getAudioTracks().forEach((track) => {
            track.enabled = false;
            track.stop();
          });
          stateRef.current.mediaStream = null;
        }
        setVoiceEnabled(false);
        stateRef.current.voiceGateOpen = false;
        togglePushToTalk(false);
        setVoiceWarning("Voice blocked by safety filter. Mic disabled.");
        return;
      }
      if (stateRef.current.mediaStream && !stateRef.current.voiceGateOpen) {
        stateRef.current.mediaStream.getAudioTracks().forEach((track) => {
          track.enabled = true;
        });
        stateRef.current.voiceGateOpen = true;
      }
    };
    recognition.onerror = () => {
      if (stateRef.current.mediaStream) {
        stateRef.current.mediaStream.getAudioTracks().forEach((track) => {
          track.enabled = false;
        });
      }
      stateRef.current.voiceGateOpen = false;
    };
    recognition.onend = () => {
      stateRef.current.speechRecognizing = false;
      if (stateRef.current.mediaStream) {
        stateRef.current.mediaStream.getAudioTracks().forEach((track) => {
          track.enabled = false;
        });
      }
      stateRef.current.voiceGateOpen = false;
    };
    stateRef.current.speechRecognition = recognition;
  }

  function startSpeechModeration() {
    const recognition = stateRef.current.speechRecognition;
    if (!recognition || stateRef.current.speechRecognizing) return;
    stateRef.current.speechRecognizing = true;
    try {
      recognition.start();
    } catch (_) {
      stateRef.current.speechRecognizing = false;
    }
  }

  function stopSpeechModeration() {
    const recognition = stateRef.current.speechRecognition;
    if (!recognition) return;
    try {
      recognition.stop();
    } catch (_) {
      stateRef.current.speechRecognizing = false;
    }
  }

  return (
    <div className={`app ${game?.started ? "game-started" : ""}`}>
      {showDisclaimer && (
        <div className="disclaimer">
          <div className="disclaimer-card">
            <h2>Play Nice</h2>
            <p className="hint">
              Chat and voice are family-friendly. Harmful language is blocked. By continuing, you
              agree to keep it kind.
            </p>
            <div className="button-row">
              <button onClick={() => setShowDisclaimer(false)}>I Understand</button>
            </div>
          </div>
        </div>
      )}
      {showSystemNotice && (
        <div className="disclaimer">
          <div className="disclaimer-card">
            <h2>System Notice</h2>
            <p className="hint">{systemNoticeText}</p>
            <div className="button-row">
              <button
                onClick={() => {
                  setShowSystemNotice(false);
                  cleanupSession();
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      {showAccessibility && (
        <div className="disclaimer" role="dialog" aria-modal="true" aria-label="Accessibility options">
          <div className="disclaimer-card">
            <h2>Accessibility</h2>
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={accessibility.largeText}
                onChange={(event) =>
                  setAccessibility({ ...accessibility, largeText: event.target.checked })
                }
              />
              <span>Large text</span>
            </label>
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={accessibility.highContrast}
                onChange={(event) =>
                  setAccessibility({ ...accessibility, highContrast: event.target.checked })
                }
              />
              <span>High contrast</span>
            </label>
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={accessibility.reduceMotion}
                onChange={(event) =>
                  setAccessibility({ ...accessibility, reduceMotion: event.target.checked })
                }
              />
              <span>Reduce motion</span>
            </label>
            <div className="button-row">
              <button onClick={() => setShowAccessibility(false)}>Done</button>
            </div>
          </div>
        </div>
      )}
      <header className="header">
        <div>
          <div className="eyebrow">Mensch ärgere Dich nicht</div>
          <h1>3D P2P Table</h1>
        </div>
        <div className="header-right">
          <button
            className="ghost"
            onClick={() => setShowAccessibility(true)}
            aria-label="Open accessibility options"
          >
            <span className="a11y-full">Accessibility</span>
            <span className="a11y-short">A11y</span>
          </button>
          <div className="version">v{appVersion}</div>
          <div className="status">{status}</div>
        </div>
      </header>

      <div className="layout">
        <section className="panel panel-left">
          <div className="card">
            <h2>Connection</h2>
            <div className="field-row">
              <label htmlFor="playerName">Name</label>
              <input
                id="playerName"
                type="text"
                placeholder="Your name"
                value={playerName}
                onChange={(event) => setPlayerName(event.target.value)}
              />
            </div>
            <div className="field-row">
              <label htmlFor="roomId">Room Name</label>
              <input
                id="roomId"
                type="text"
                placeholder="sunny-forest"
                value={roomId}
                disabled={roomLocked}
                onChange={(event) => setRoomId(event.target.value)}
              />
            </div>
            <div className="button-row single-line">
              <button onClick={handleHost} disabled={!playerName.trim()}>
                Host
              </button>
              <button className="ghost" onClick={handleJoin} disabled={!playerName.trim() || !roomId.trim()}>
                Join
              </button>
              <button className="ghost" onClick={resetPeer} disabled={!game?.started}>
                Reset Peer
              </button>
            </div>
          </div>

          {game?.started && (
            <div className="card">
              <h2>Players</h2>
              <div className="players">
                {(game?.players || [])
                  .filter((player) => player.connected !== false)
                  .map((player, index) => (
                    <div key={player.id} className="player-pill">
                      <span className={`dot ${player.color}`} />
                      <span>
                        {player.name}
                        {index === assignedIndex ? " (you)" : ""}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </section>

        <section className="panel panel-right">
          <div className="card">
            <h2>Chat</h2>
            {chatLog.length > 0 && (
              <div className="chat-log">
                {chatLog.map((msg) => (
                  <div key={msg.id} className={`chat-item ${msg.from === "system" ? "system" : ""}`}>
                    <span className="chat-name">{msg.name}:</span>
                    <span className="chat-text">{msg.text}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="chat-input">
              <input
                type="text"
                placeholder="Say something nice"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                ref={chatInputRef}
                disabled={!isInRoom}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleChatSend();
                }}
              />
              <button
                className="icon-btn"
                onClick={handleChatSend}
                aria-label="Send chat"
                disabled={!isInRoom}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3.4 20.6 22 12 3.4 3.4l2.3 7.6L16 12l-10.3 1z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            {!isInRoom && <div className="hint">Join a room to chat.</div>}
          </div>

          <div className="card">
            <h2>Voice</h2>
            <p className="hint">Hold to talk.</p>
            <div className="button-row single-line">
              <button
                className="ghost"
                onClick={enableVoice}
                disabled={!isInRoom || voiceEnabled || !voiceModerationAvailable}
              >
                Enable Mic
              </button>
              <button className="ghost" onClick={toggleMuteAll} disabled={!isInRoom}>
                {audioMuted ? "Unmute" : "Mute"}
              </button>
              <button
                onMouseDown={() => togglePushToTalk(true)}
                onMouseUp={() => togglePushToTalk(false)}
                onMouseLeave={() => togglePushToTalk(false)}
                onTouchStart={() => togglePushToTalk(true)}
                onTouchEnd={() => togglePushToTalk(false)}
                disabled={!voiceEnabled || !isInRoom}
              >
                Push to Talk
              </button>
            </div>
            {!isInRoom && <div className="hint">Join a room to use voice.</div>}
            {voiceWarning && <div className="hint">{voiceWarning}</div>}
          </div>
        </section>

        <main className="board-wrap">
          <div className="board" ref={boardRef}>
            <canvas ref={canvasRef} className="three-canvas" />
          </div>
        </main>
      </div>

      {game && (
        <div className="bottom-controls">
          <div className="controls-row">{turnText}</div>
          <div className="controls-row">
            <button
              className="ghost"
              onClick={startGame}
              disabled={!stateRef.current.isHost || game?.started}
            >
              Start Game
            </button>
            <button onClick={handleRoll} disabled={!isMyTurn || game?.dice !== null}>
              Roll Dice
            </button>
            {game?.started && <div className="dice">{diceValue}</div>}
          </div>
          <div className="controls-row">
          <button className="ghost" onClick={resetPeer} disabled={!game?.started}>
            Reset Peer
          </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
