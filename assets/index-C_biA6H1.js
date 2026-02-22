var _0=n=>{throw TypeError(n)};var js=(n,e,t)=>e.has(n)?_0("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);function v0(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Nm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Om={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),y0=Symbol.for("react.portal"),x0=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),R0=Symbol.for("react.suspense"),A0=Symbol.for("react.memo"),w0=Symbol.for("react.lazy"),Wd=Symbol.iterator;function b0(n){return n===null||typeof n!="object"?null:(n=Wd&&n[Wd]||n["@@iterator"],typeof n=="function"?n:null)}var km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fm=Object.assign,zm={};function zs(n,e,t){this.props=n,this.context=e,this.refs=zm,this.updater=t||km}zs.prototype.isReactComponent={};zs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};zs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Bm(){}Bm.prototype=zs.prototype;function Uf(n,e,t){this.props=n,this.context=e,this.refs=zm,this.updater=t||km}var Nf=Uf.prototype=new Bm;Nf.constructor=Uf;Fm(Nf,zs.prototype);Nf.isPureReactComponent=!0;var Xd=Array.isArray,Gm=Object.prototype.hasOwnProperty,Of={current:null},Hm={key:!0,ref:!0,__self:!0,__source:!0};function Vm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,i)&&!Hm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xo,type:n,key:s,ref:o,props:r,_owner:Of.current}}function P0(n,e){return{$$typeof:Xo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function kf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xo}function L0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var jd=/\/+/g;function fc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?L0(""+n.key):e.toString(36)}function Va(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Xo:case y0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+fc(o,0):i,Xd(r)?(t="",n!=null&&(t=n.replace(jd,"$&/")+"/"),Va(r,e,t,"",function(c){return c})):r!=null&&(kf(r)&&(r=P0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Xd(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+fc(s,a);o+=Va(s,e,t,l,r)}else if(l=b0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+fc(s,a++),o+=Va(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(n,e,t){if(n==null)return n;var i=[],r=0;return Va(n,i,"","",function(s){return e.call(t,s,r++)}),i}function D0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var tn={current:null},Wa={transition:null},I0={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Of};function Wm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ia,forEach:function(n,e,t){ia(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ia(n,function(){e++}),e},toArray:function(n){return ia(n,function(e){return e})||[]},only:function(n){if(!kf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=zs;Xe.Fragment=x0;Xe.Profiler=E0;Xe.PureComponent=Uf;Xe.StrictMode=S0;Xe.Suspense=R0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I0;Xe.act=Wm;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Fm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Of.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Gm.call(e,l)&&!Hm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Xo,type:n.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(n){return n={$$typeof:T0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:M0,_context:n},n.Consumer=n};Xe.createElement=Vm;Xe.createFactory=function(n){var e=Vm.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:C0,render:n}};Xe.isValidElement=kf;Xe.lazy=function(n){return{$$typeof:w0,_payload:{_status:-1,_result:n},_init:D0}};Xe.memo=function(n,e){return{$$typeof:A0,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=Wa.transition;Wa.transition={};try{n()}finally{Wa.transition=e}};Xe.unstable_act=Wm;Xe.useCallback=function(n,e){return tn.current.useCallback(n,e)};Xe.useContext=function(n){return tn.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return tn.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return tn.current.useEffect(n,e)};Xe.useId=function(){return tn.current.useId()};Xe.useImperativeHandle=function(n,e,t){return tn.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return tn.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return tn.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return tn.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return tn.current.useReducer(n,e,t)};Xe.useRef=function(n){return tn.current.useRef(n)};Xe.useState=function(n){return tn.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return tn.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return tn.current.useTransition()};Xe.version="18.3.1";Om.exports=Xe;var rt=Om.exports;const me=Nm(rt);var Xm={exports:{}},En={},jm={exports:{}},$m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,B){var W=U.length;U.push(B);e:for(;0<W;){var Y=W-1>>>1,Q=U[Y];if(0<r(Q,B))U[Y]=B,U[W]=Q,W=Y;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var B=U[0],W=U.pop();if(W!==B){U[0]=W;e:for(var Y=0,Q=U.length,X=Q>>>1;Y<X;){var Z=2*(Y+1)-1,ce=U[Z],ye=Z+1,Ee=U[ye];if(0>r(ce,W))ye<Q&&0>r(Ee,ce)?(U[Y]=Ee,U[ye]=W,Y=ye):(U[Y]=ce,U[Z]=W,Y=Z);else if(ye<Q&&0>r(Ee,W))U[Y]=Ee,U[ye]=W,Y=ye;else break e}}return B}function r(U,B){var W=U.sortIndex-B.sortIndex;return W!==0?W:U.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,y=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var B=t(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=U)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(c)}}function S(U){if(v=!1,_(U),!y)if(t(l)!==null)y=!0,$(L);else{var B=t(c);B!==null&&K(S,B.startTime-U)}}function L(U,B){y=!1,v&&(v=!1,f(k),k=-1),p=!0;var W=h;try{for(_(B),d=t(l);d!==null&&(!(d.expirationTime>B)||U&&!V());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,h=d.priorityLevel;var Q=Y(d.expirationTime<=B);B=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),_(B)}else i(l);d=t(l)}if(d!==null)var X=!0;else{var Z=t(c);Z!==null&&K(S,Z.startTime-B),X=!1}return X}finally{d=null,h=W,p=!1}}var P=!1,b=null,k=-1,T=5,C=-1;function V(){return!(n.unstable_now()-C<T)}function j(){if(b!==null){var U=n.unstable_now();C=U;var B=!0;try{B=b(!0,U)}finally{B?J():(P=!1,b=null)}}else P=!1}var J;if(typeof g=="function")J=function(){g(j)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,z=I.port2;I.port1.onmessage=j,J=function(){z.postMessage(null)}}else J=function(){m(j,0)};function $(U){b=U,P||(P=!0,J())}function K(U,B){k=m(function(){U(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){y||p||(y=!0,$(L))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var W=h;h=B;try{return U()}finally{h=W}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=h;h=U;try{return B()}finally{h=W}},n.unstable_scheduleCallback=function(U,B,W){var Y=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Y+W:Y):W=Y,U){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,U={id:u++,callback:B,priorityLevel:U,startTime:W,expirationTime:Q,sortIndex:-1},W>Y?(U.sortIndex=W,e(c,U),t(l)===null&&U===t(c)&&(v?(f(k),k=-1):v=!0,K(S,W-Y))):(U.sortIndex=Q,e(l,U),y||p||(y=!0,$(L))),U},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(U){var B=h;return function(){var W=h;h=B;try{return U.apply(this,arguments)}finally{h=W}}}})($m);jm.exports=$m;var U0=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=rt,Sn=U0;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ym=new Set,Co={};function Ur(n,e){ws(n,e),ws(n+"Capture",e)}function ws(n,e){for(Co[n]=e,n=0;n<e.length;n++)Ym.add(e[n])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,O0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$d={},Yd={};function k0(n){return vu.call(Yd,n)?!0:vu.call($d,n)?!1:O0.test(n)?Yd[n]=!0:($d[n]=!0,!1)}function F0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z0(n,e,t,i){if(e===null||typeof e>"u"||F0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){zt[n]=new nn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];zt[e]=new nn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){zt[n]=new nn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){zt[n]=new nn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){zt[n]=new nn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){zt[n]=new nn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){zt[n]=new nn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){zt[n]=new nn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){zt[n]=new nn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function zf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ff,zf);zt[e]=new nn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ff,zf);zt[e]=new nn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ff,zf);zt[e]=new nn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){zt[n]=new nn(n,1,!1,n.toLowerCase(),null,!1,!1)});zt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){zt[n]=new nn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Bf(n,e,t,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z0(e,t,r,i)&&(t=null),i||r===null?k0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ei=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),qm=Symbol.for("react.provider"),Km=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),Zm=Symbol.for("react.offscreen"),qd=Symbol.iterator;function $s(n){return n===null||typeof n!="object"?null:(n=qd&&n[qd]||n["@@iterator"],typeof n=="function"?n:null)}var gt=Object.assign,dc;function ao(n){if(dc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+n}var hc=!1;function pc(n,e){if(!n||hc)return"";hc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{hc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ao(n):""}function B0(n){switch(n.tag){case 5:return ao(n.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return n=pc(n.type,!1),n;case 11:return n=pc(n.type.render,!1),n;case 1:return n=pc(n.type,!0),n;default:return""}}function Eu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ss:return"Fragment";case rs:return"Portal";case yu:return"Profiler";case Gf:return"StrictMode";case xu:return"Suspense";case Su:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Km:return(n.displayName||"Context")+".Consumer";case qm:return(n._context.displayName||"Context")+".Provider";case Hf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Vf:return e=n.displayName||null,e!==null?e:Eu(n.type)||"Memo";case Pi:e=n._payload,n=n._init;try{return Eu(n(e))}catch{}}return null}function G0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H0(n){var e=Qm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function sa(n){n._valueTracker||(n._valueTracker=H0(n))}function Jm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Qm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ll(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Mu(n,e){var t=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Kd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Qi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eg(n,e){e=e.checked,e!=null&&Bf(n,"checked",e,!1)}function Tu(n,e){eg(n,e);var t=Qi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Cu(n,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Zd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Cu(n,e,t){(e!=="number"||ll(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var lo=Array.isArray;function ys(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Qi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ru(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Qd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(lo(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Qi(t)}}function tg(n,e){var t=Qi(e.value),i=Qi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Jd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ng(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ng(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oa,ig=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ro(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(n){V0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ho[e]=ho[n]})});function rg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ho.hasOwnProperty(n)&&ho[n]?(""+e).trim():e+"px"}function sg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=rg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var W0=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(n,e){if(e){if(W0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function bu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function Wf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Lu=null,xs=null,Ss=null;function eh(n){if(n=Yo(n)){if(typeof Lu!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=Wl(e),Lu(n.stateNode,n.type,e))}}function og(n){xs?Ss?Ss.push(n):Ss=[n]:xs=n}function ag(){if(xs){var n=xs,e=Ss;if(Ss=xs=null,eh(n),e)for(n=0;n<e.length;n++)eh(e[n])}}function lg(n,e){return n(e)}function cg(){}var mc=!1;function ug(n,e,t){if(mc)return n(e,t);mc=!0;try{return lg(n,e,t)}finally{mc=!1,(xs!==null||Ss!==null)&&(cg(),ag())}}function Ao(n,e){var t=n.stateNode;if(t===null)return null;var i=Wl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var Du=!1;if(_i)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Du=!1}function X0(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var po=!1,cl=null,ul=!1,Iu=null,j0={onError:function(n){po=!0,cl=n}};function $0(n,e,t,i,r,s,o,a,l){po=!1,cl=null,X0.apply(j0,arguments)}function Y0(n,e,t,i,r,s,o,a,l){if($0.apply(this,arguments),po){if(po){var c=cl;po=!1,cl=null}else throw Error(ie(198));ul||(ul=!0,Iu=c)}}function Nr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function fg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function th(n){if(Nr(n)!==n)throw Error(ie(188))}function q0(n){var e=n.alternate;if(!e){if(e=Nr(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return th(r),n;if(s===i)return th(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function dg(n){return n=q0(n),n!==null?hg(n):null}function hg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=hg(n);if(e!==null)return e;n=n.sibling}return null}var pg=Sn.unstable_scheduleCallback,nh=Sn.unstable_cancelCallback,K0=Sn.unstable_shouldYield,Z0=Sn.unstable_requestPaint,vt=Sn.unstable_now,Q0=Sn.unstable_getCurrentPriorityLevel,Xf=Sn.unstable_ImmediatePriority,mg=Sn.unstable_UserBlockingPriority,fl=Sn.unstable_NormalPriority,J0=Sn.unstable_LowPriority,gg=Sn.unstable_IdlePriority,Bl=null,ei=null;function ey(n){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Bl,n,void 0,(n.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:iy,ty=Math.log,ny=Math.LN2;function iy(n){return n>>>=0,n===0?32:31-(ty(n)/ny|0)|0}var aa=64,la=4194304;function co(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=co(a):(s&=o,s!==0&&(i=co(s)))}else o=t&~r,o!==0?i=co(o):s!==0&&(i=co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-jn(e),r=1<<t,i|=n[t],e&=~r;return i}function ry(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=ry(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Uu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _g(){var n=aa;return aa<<=1,!(aa&4194240)&&(aa=64),n}function gc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function jo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-jn(e),n[e]=t}function oy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function jf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function vg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var yg,$f,xg,Sg,Eg,Nu=!1,ca=[],zi=null,Bi=null,Gi=null,wo=new Map,bo=new Map,Di=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ih(n,e){switch(n){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function qs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&$f(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ly(n,e,t,i,r){switch(e){case"focusin":return zi=qs(zi,n,e,t,i,r),!0;case"dragenter":return Bi=qs(Bi,n,e,t,i,r),!0;case"mouseover":return Gi=qs(Gi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,qs(wo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,qs(bo.get(s)||null,n,e,t,i,r)),!0}return!1}function Mg(n){var e=yr(n.target);if(e!==null){var t=Nr(e);if(t!==null){if(e=t.tag,e===13){if(e=fg(t),e!==null){n.blockedOn=e,Eg(n.priority,function(){xg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ou(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Pu=i,t.target.dispatchEvent(i),Pu=null}else return e=Yo(t),e!==null&&$f(e),n.blockedOn=t,!1;e.shift()}return!0}function rh(n,e,t){Xa(n)&&t.delete(e)}function cy(){Nu=!1,zi!==null&&Xa(zi)&&(zi=null),Bi!==null&&Xa(Bi)&&(Bi=null),Gi!==null&&Xa(Gi)&&(Gi=null),wo.forEach(rh),bo.forEach(rh)}function Ks(n,e){n.blockedOn===e&&(n.blockedOn=null,Nu||(Nu=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,cy)))}function Po(n){function e(r){return Ks(r,n)}if(0<ca.length){Ks(ca[0],n);for(var t=1;t<ca.length;t++){var i=ca[t];i.blockedOn===n&&(i.blockedOn=null)}}for(zi!==null&&Ks(zi,n),Bi!==null&&Ks(Bi,n),Gi!==null&&Ks(Gi,n),wo.forEach(e),bo.forEach(e),t=0;t<Di.length;t++)i=Di[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Di.length&&(t=Di[0],t.blockedOn===null);)Mg(t),t.blockedOn===null&&Di.shift()}var Es=Ei.ReactCurrentBatchConfig,hl=!0;function uy(n,e,t,i){var r=nt,s=Es.transition;Es.transition=null;try{nt=1,Yf(n,e,t,i)}finally{nt=r,Es.transition=s}}function fy(n,e,t,i){var r=nt,s=Es.transition;Es.transition=null;try{nt=4,Yf(n,e,t,i)}finally{nt=r,Es.transition=s}}function Yf(n,e,t,i){if(hl){var r=Ou(n,e,t,i);if(r===null)Rc(n,e,i,pl,t),ih(n,i);else if(ly(r,n,e,t,i))i.stopPropagation();else if(ih(n,i),e&4&&-1<ay.indexOf(n)){for(;r!==null;){var s=Yo(r);if(s!==null&&yg(s),s=Ou(n,e,t,i),s===null&&Rc(n,e,i,pl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(n,e,i,null,t)}}var pl=null;function Ou(n,e,t,i){if(pl=null,n=Wf(i),n=yr(n),n!==null)if(e=Nr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=fg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return pl=n,null}function Tg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case Xf:return 1;case mg:return 4;case fl:case J0:return 16;case gg:return 536870912;default:return 16}default:return 16}}var Ui=null,qf=null,ja=null;function Cg(){if(ja)return ja;var n,e=qf,t=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ja=r.slice(n,1<i?1-i:void 0)}function $a(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ua(){return!0}function sh(){return!1}function Mn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:sh,this.isPropagationStopped=sh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kf=Mn(Bs),$o=gt({},Bs,{view:0,detail:0}),dy=Mn($o),_c,vc,Zs,Gl=gt({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zs&&(Zs&&n.type==="mousemove"?(_c=n.screenX-Zs.screenX,vc=n.screenY-Zs.screenY):vc=_c=0,Zs=n),_c)},movementY:function(n){return"movementY"in n?n.movementY:vc}}),oh=Mn(Gl),hy=gt({},Gl,{dataTransfer:0}),py=Mn(hy),my=gt({},$o,{relatedTarget:0}),yc=Mn(my),gy=gt({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),_y=Mn(gy),vy=gt({},Bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yy=Mn(vy),xy=gt({},Bs,{data:0}),ah=Mn(xy),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=My[n])?!!e[n]:!1}function Zf(){return Ty}var Cy=gt({},$o,{key:function(n){if(n.key){var e=Sy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=$a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ey[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(n){return n.type==="keypress"?$a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ry=Mn(Cy),Ay=gt({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=Mn(Ay),wy=gt({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),by=Mn(wy),Py=gt({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ly=Mn(Py),Dy=gt({},Gl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=Mn(Dy),Uy=[9,13,27,32],Qf=_i&&"CompositionEvent"in window,mo=null;_i&&"documentMode"in document&&(mo=document.documentMode);var Ny=_i&&"TextEvent"in window&&!mo,Rg=_i&&(!Qf||mo&&8<mo&&11>=mo),ch=" ",uh=!1;function Ag(n,e){switch(n){case"keyup":return Uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function Oy(n,e){switch(n){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(uh=!0,ch);case"textInput":return n=e.data,n===ch&&uh?null:n;default:return null}}function ky(n,e){if(os)return n==="compositionend"||!Qf&&Ag(n,e)?(n=Cg(),ja=qf=Ui=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Fy[n.type]:e==="textarea"}function bg(n,e,t,i){og(i),e=ml(e,"onChange"),0<e.length&&(t=new Kf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var go=null,Lo=null;function zy(n){Bg(n,0)}function Hl(n){var e=cs(n);if(Jm(e))return n}function By(n,e){if(n==="change")return e}var Pg=!1;if(_i){var xc;if(_i){var Sc="oninput"in document;if(!Sc){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Sc=typeof dh.oninput=="function"}xc=Sc}else xc=!1;Pg=xc&&(!document.documentMode||9<document.documentMode)}function hh(){go&&(go.detachEvent("onpropertychange",Lg),Lo=go=null)}function Lg(n){if(n.propertyName==="value"&&Hl(Lo)){var e=[];bg(e,Lo,n,Wf(n)),ug(zy,e)}}function Gy(n,e,t){n==="focusin"?(hh(),go=e,Lo=t,go.attachEvent("onpropertychange",Lg)):n==="focusout"&&hh()}function Hy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hl(Lo)}function Vy(n,e){if(n==="click")return Hl(e)}function Wy(n,e){if(n==="input"||n==="change")return Hl(e)}function Xy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Xy;function Do(n,e){if(Yn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!vu.call(e,r)||!Yn(n[r],e[r]))return!1}return!0}function ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function mh(n,e){var t=ph(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ph(t)}}function Dg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Dg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ig(){for(var n=window,e=ll();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ll(n.document)}return e}function Jf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function jy(n){var e=Ig(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Dg(t.ownerDocument.documentElement,t)){if(i!==null&&Jf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=mh(t,s);var o=mh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $y=_i&&"documentMode"in document&&11>=document.documentMode,as=null,ku=null,_o=null,Fu=!1;function gh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fu||as==null||as!==ll(i)||(i=as,"selectionStart"in i&&Jf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&Do(_o,i)||(_o=i,i=ml(ku,"onSelect"),0<i.length&&(e=new Kf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=as)))}function fa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ls={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},Ec={},Ug={};_i&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Vl(n){if(Ec[n])return Ec[n];if(!ls[n])return n;var e=ls[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ug)return Ec[n]=e[t];return n}var Ng=Vl("animationend"),Og=Vl("animationiteration"),kg=Vl("animationstart"),Fg=Vl("transitionend"),zg=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,e){zg.set(n,e),Ur(e,[n])}for(var Mc=0;Mc<_h.length;Mc++){var Tc=_h[Mc],Yy=Tc.toLowerCase(),qy=Tc[0].toUpperCase()+Tc.slice(1);tr(Yy,"on"+qy)}tr(Ng,"onAnimationEnd");tr(Og,"onAnimationIteration");tr(kg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(Fg,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function vh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Y0(i,e,void 0,n),n.currentTarget=null}function Bg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vh(r,a,c),s=l}}}if(ul)throw n=Iu,ul=!1,Iu=null,n}function ut(n,e){var t=e[Vu];t===void 0&&(t=e[Vu]=new Set);var i=n+"__bubble";t.has(i)||(Gg(e,n,2,!1),t.add(i))}function Cc(n,e,t){var i=0;e&&(i|=4),Gg(t,n,i,e)}var da="_reactListening"+Math.random().toString(36).slice(2);function Io(n){if(!n[da]){n[da]=!0,Ym.forEach(function(t){t!=="selectionchange"&&(Ky.has(t)||Cc(t,!1,n),Cc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[da]||(e[da]=!0,Cc("selectionchange",!1,e))}}function Gg(n,e,t,i){switch(Tg(e)){case 1:var r=uy;break;case 4:r=fy;break;default:r=Yf}t=r.bind(null,e,t,n),r=void 0,!Du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Rc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ug(function(){var c=s,u=Wf(t),d=[];e:{var h=zg.get(n);if(h!==void 0){var p=Kf,y=n;switch(n){case"keypress":if($a(t)===0)break e;case"keydown":case"keyup":p=Ry;break;case"focusin":y="focus",p=yc;break;case"focusout":y="blur",p=yc;break;case"beforeblur":case"afterblur":p=yc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=by;break;case Ng:case Og:case kg:p=_y;break;case Fg:p=Ly;break;case"scroll":p=dy;break;case"wheel":p=Iy;break;case"copy":case"cut":case"paste":p=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lh}var v=(e&4)!==0,m=!v&&n==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,f!==null&&(S=Ao(g,f),S!=null&&v.push(Uo(g,S,_)))),m)break;g=g.return}0<v.length&&(h=new p(h,y,null,t,u),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Pu&&(y=t.relatedTarget||t.fromElement)&&(yr(y)||y[vi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=t.relatedTarget||t.toElement,p=c,y=y?yr(y):null,y!==null&&(m=Nr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=oh,S="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(v=lh,S="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:cs(p),_=y==null?h:cs(y),h=new v(S,g+"leave",p,t,u),h.target=m,h.relatedTarget=_,S=null,yr(u)===c&&(v=new v(f,g+"enter",y,t,u),v.target=_,v.relatedTarget=m,S=v),m=S,p&&y)t:{for(v=p,f=y,g=0,_=v;_;_=Gr(_))g++;for(_=0,S=f;S;S=Gr(S))_++;for(;0<g-_;)v=Gr(v),g--;for(;0<_-g;)f=Gr(f),_--;for(;g--;){if(v===f||f!==null&&v===f.alternate)break t;v=Gr(v),f=Gr(f)}v=null}else v=null;p!==null&&yh(d,h,p,v,!1),y!==null&&m!==null&&yh(d,m,y,v,!0)}}e:{if(h=c?cs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=By;else if(fh(h))if(Pg)L=Wy;else{L=Hy;var P=Gy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=Vy);if(L&&(L=L(n,c))){bg(d,L,t,u);break e}P&&P(n,h,c),n==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Cu(h,"number",h.value)}switch(P=c?cs(c):window,n){case"focusin":(fh(P)||P.contentEditable==="true")&&(as=P,ku=c,_o=null);break;case"focusout":_o=ku=as=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,gh(d,t,u);break;case"selectionchange":if($y)break;case"keydown":case"keyup":gh(d,t,u)}var b;if(Qf)e:{switch(n){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else os?Ag(n,t)&&(k="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(Rg&&t.locale!=="ko"&&(os||k!=="onCompositionStart"?k==="onCompositionEnd"&&os&&(b=Cg()):(Ui=u,qf="value"in Ui?Ui.value:Ui.textContent,os=!0)),P=ml(c,k),0<P.length&&(k=new ah(k,n,null,t,u),d.push({event:k,listeners:P}),b?k.data=b:(b=wg(t),b!==null&&(k.data=b)))),(b=Ny?Oy(n,t):ky(n,t))&&(c=ml(c,"onBeforeInput"),0<c.length&&(u=new ah("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=b))}Bg(d,e)})}function Uo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ml(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ao(n,t),s!=null&&i.unshift(Uo(n,s,r)),s=Ao(n,e),s!=null&&i.push(Uo(n,s,r))),n=n.return}return i}function Gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ao(t,s),l!=null&&o.unshift(Uo(t,l,a))):r||(l=Ao(t,s),l!=null&&o.push(Uo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Zy=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(Zy,`
`).replace(Qy,"")}function ha(n,e,t){if(e=xh(e),xh(n)!==e&&t)throw Error(ie(425))}function gl(){}var zu=null,Bu=null;function Gu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(n){return Sh.resolve(null).then(n).catch(tx)}:Hu;function tx(n){setTimeout(function(){throw n})}function Ac(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Po(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Po(e)}function Hi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Eh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Gs,No="__reactProps$"+Gs,vi="__reactContainer$"+Gs,Vu="__reactEvents$"+Gs,nx="__reactListeners$"+Gs,ix="__reactHandles$"+Gs;function yr(n){var e=n[Jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[vi]||t[Jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Eh(n);n!==null;){if(t=n[Jn])return t;n=Eh(n)}return e}n=t,t=n.parentNode}return null}function Yo(n){return n=n[Jn]||n[vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function Wl(n){return n[No]||null}var Wu=[],us=-1;function nr(n){return{current:n}}function dt(n){0>us||(n.current=Wu[us],Wu[us]=null,us--)}function at(n,e){us++,Wu[us]=n.current,n.current=e}var Ji={},Yt=nr(Ji),un=nr(!1),Ar=Ji;function bs(n,e){var t=n.type.contextTypes;if(!t)return Ji;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function fn(n){return n=n.childContextTypes,n!=null}function _l(){dt(un),dt(Yt)}function Mh(n,e,t){if(Yt.current!==Ji)throw Error(ie(168));at(Yt,e),at(un,t)}function Hg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,G0(n)||"Unknown",r));return gt({},t,i)}function vl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ji,Ar=Yt.current,at(Yt,n),at(un,un.current),!0}function Th(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=Hg(n,e,Ar),i.__reactInternalMemoizedMergedChildContext=n,dt(un),dt(Yt),at(Yt,n)):dt(un),at(un,t)}var ui=null,Xl=!1,wc=!1;function Vg(n){ui===null?ui=[n]:ui.push(n)}function rx(n){Xl=!0,Vg(n)}function ir(){if(!wc&&ui!==null){wc=!0;var n=0,e=nt;try{var t=ui;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ui=null,Xl=!1}catch(r){throw ui!==null&&(ui=ui.slice(n+1)),pg(Xf,ir),r}finally{nt=e,wc=!1}}return null}var fs=[],ds=0,yl=null,xl=0,An=[],wn=0,wr=null,di=1,hi="";function dr(n,e){fs[ds++]=xl,fs[ds++]=yl,yl=n,xl=e}function Wg(n,e,t){An[wn++]=di,An[wn++]=hi,An[wn++]=wr,wr=n;var i=di;n=hi;var r=32-jn(i)-1;i&=~(1<<r),t+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,di=1<<32-jn(e)+r|t<<r|i,hi=s+n}else di=1<<s|t<<r|i,hi=n}function ed(n){n.return!==null&&(dr(n,1),Wg(n,1,0))}function td(n){for(;n===yl;)yl=fs[--ds],fs[ds]=null,xl=fs[--ds],fs[ds]=null;for(;n===wr;)wr=An[--wn],An[wn]=null,hi=An[--wn],An[wn]=null,di=An[--wn],An[wn]=null}var yn=null,vn=null,ht=!1,Hn=null;function Xg(n,e){var t=Dn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ch(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,yn=n,vn=Hi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,yn=n,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=wr!==null?{id:di,overflow:hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Dn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,yn=n,vn=null,!0):!1;default:return!1}}function Xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ju(n){if(ht){var e=vn;if(e){var t=e;if(!Ch(n,e)){if(Xu(n))throw Error(ie(418));e=Hi(t.nextSibling);var i=yn;e&&Ch(n,e)?Xg(i,t):(n.flags=n.flags&-4097|2,ht=!1,yn=n)}}else{if(Xu(n))throw Error(ie(418));n.flags=n.flags&-4097|2,ht=!1,yn=n}}}function Rh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function pa(n){if(n!==yn)return!1;if(!ht)return Rh(n),ht=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Gu(n.type,n.memoizedProps)),e&&(e=vn)){if(Xu(n))throw jg(),Error(ie(418));for(;e;)Xg(n,e),e=Hi(e.nextSibling)}if(Rh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vn=Hi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vn=null}}else vn=yn?Hi(n.stateNode.nextSibling):null;return!0}function jg(){for(var n=vn;n;)n=Hi(n.nextSibling)}function Ps(){vn=yn=null,ht=!1}function nd(n){Hn===null?Hn=[n]:Hn.push(n)}var sx=Ei.ReactCurrentBatchConfig;function Qs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function ma(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ah(n){var e=n._init;return e(n._payload)}function $g(n){function e(f,g){if(n){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=ji(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,n?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,_,S){return g===null||g.tag!==6?(g=Nc(_,f.mode,S),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,S){var L=_.type;return L===ss?u(f,g,_.props.children,S,_.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Pi&&Ah(L)===g.type)?(S=r(g,_.props),S.ref=Qs(f,g,_),S.return=f,S):(S=el(_.type,_.key,_.props,null,f.mode,S),S.ref=Qs(f,g,_),S.return=f,S)}function c(f,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Oc(_,f.mode,S),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function u(f,g,_,S,L){return g===null||g.tag!==7?(g=Mr(_,f.mode,S,L),g.return=f,g):(g=r(g,_),g.return=f,g)}function d(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Nc(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ra:return _=el(g.type,g.key,g.props,null,f.mode,_),_.ref=Qs(f,null,g),_.return=f,_;case rs:return g=Oc(g,f.mode,_),g.return=f,g;case Pi:var S=g._init;return d(f,S(g._payload),_)}if(lo(g)||$s(g))return g=Mr(g,f.mode,_,null),g.return=f,g;ma(f,g)}return null}function h(f,g,_,S){var L=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:a(f,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ra:return _.key===L?l(f,g,_,S):null;case rs:return _.key===L?c(f,g,_,S):null;case Pi:return L=_._init,h(f,g,L(_._payload),S)}if(lo(_)||$s(_))return L!==null?null:u(f,g,_,S,null);ma(f,_)}return null}function p(f,g,_,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(_)||null,a(g,f,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ra:return f=f.get(S.key===null?_:S.key)||null,l(g,f,S,L);case rs:return f=f.get(S.key===null?_:S.key)||null,c(g,f,S,L);case Pi:var P=S._init;return p(f,g,_,P(S._payload),L)}if(lo(S)||$s(S))return f=f.get(_)||null,u(g,f,S,L,null);ma(g,S)}return null}function y(f,g,_,S){for(var L=null,P=null,b=g,k=g=0,T=null;b!==null&&k<_.length;k++){b.index>k?(T=b,b=null):T=b.sibling;var C=h(f,b,_[k],S);if(C===null){b===null&&(b=T);break}n&&b&&C.alternate===null&&e(f,b),g=s(C,g,k),P===null?L=C:P.sibling=C,P=C,b=T}if(k===_.length)return t(f,b),ht&&dr(f,k),L;if(b===null){for(;k<_.length;k++)b=d(f,_[k],S),b!==null&&(g=s(b,g,k),P===null?L=b:P.sibling=b,P=b);return ht&&dr(f,k),L}for(b=i(f,b);k<_.length;k++)T=p(b,f,k,_[k],S),T!==null&&(n&&T.alternate!==null&&b.delete(T.key===null?k:T.key),g=s(T,g,k),P===null?L=T:P.sibling=T,P=T);return n&&b.forEach(function(V){return e(f,V)}),ht&&dr(f,k),L}function v(f,g,_,S){var L=$s(_);if(typeof L!="function")throw Error(ie(150));if(_=L.call(_),_==null)throw Error(ie(151));for(var P=L=null,b=g,k=g=0,T=null,C=_.next();b!==null&&!C.done;k++,C=_.next()){b.index>k?(T=b,b=null):T=b.sibling;var V=h(f,b,C.value,S);if(V===null){b===null&&(b=T);break}n&&b&&V.alternate===null&&e(f,b),g=s(V,g,k),P===null?L=V:P.sibling=V,P=V,b=T}if(C.done)return t(f,b),ht&&dr(f,k),L;if(b===null){for(;!C.done;k++,C=_.next())C=d(f,C.value,S),C!==null&&(g=s(C,g,k),P===null?L=C:P.sibling=C,P=C);return ht&&dr(f,k),L}for(b=i(f,b);!C.done;k++,C=_.next())C=p(b,f,k,C.value,S),C!==null&&(n&&C.alternate!==null&&b.delete(C.key===null?k:C.key),g=s(C,g,k),P===null?L=C:P.sibling=C,P=C);return n&&b.forEach(function(j){return e(f,j)}),ht&&dr(f,k),L}function m(f,g,_,S){if(typeof _=="object"&&_!==null&&_.type===ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ra:e:{for(var L=_.key,P=g;P!==null;){if(P.key===L){if(L=_.type,L===ss){if(P.tag===7){t(f,P.sibling),g=r(P,_.props.children),g.return=f,f=g;break e}}else if(P.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Pi&&Ah(L)===P.type){t(f,P.sibling),g=r(P,_.props),g.ref=Qs(f,P,_),g.return=f,f=g;break e}t(f,P);break}else e(f,P);P=P.sibling}_.type===ss?(g=Mr(_.props.children,f.mode,S,_.key),g.return=f,f=g):(S=el(_.type,_.key,_.props,null,f.mode,S),S.ref=Qs(f,g,_),S.return=f,f=S)}return o(f);case rs:e:{for(P=_.key;g!==null;){if(g.key===P)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){t(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=Oc(_,f.mode,S),g.return=f,f=g}return o(f);case Pi:return P=_._init,m(f,g,P(_._payload),S)}if(lo(_))return y(f,g,_,S);if($s(_))return v(f,g,_,S);ma(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,_),g.return=f,f=g):(t(f,g),g=Nc(_,f.mode,S),g.return=f,f=g),o(f)):t(f,g)}return m}var Ls=$g(!0),Yg=$g(!1),Sl=nr(null),El=null,hs=null,id=null;function rd(){id=hs=El=null}function sd(n){var e=Sl.current;dt(Sl),n._currentValue=e}function $u(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ms(n,e){El=n,id=hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(cn=!0),n.firstContext=null)}function Un(n){var e=n._currentValue;if(id!==n)if(n={context:n,memoizedValue:e,next:null},hs===null){if(El===null)throw Error(ie(308));hs=n,El.dependencies={lanes:0,firstContext:n}}else hs=hs.next=n;return e}var xr=null;function od(n){xr===null?xr=[n]:xr.push(n)}function qg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,od(e)):(t.next=r.next,r.next=t),e.interleaved=t,yi(n,i)}function yi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Li=!1;function ad(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(n,t)}return r=i.interleaved,r===null?(e.next=e,od(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(n,t)}function Ya(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jf(n,t)}}function wh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ml(n,e,t,i){var r=n.updateQueue;Li=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,v=a;switch(h=e,p=t,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=gt({},d,h);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,n.lanes=o,n.memoizedState=d}}function bh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var qo={},ti=nr(qo),Oo=nr(qo),ko=nr(qo);function Sr(n){if(n===qo)throw Error(ie(174));return n}function ld(n,e){switch(at(ko,e),at(Oo,n),at(ti,qo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Au(e,n)}dt(ti),at(ti,e)}function Ds(){dt(ti),dt(Oo),dt(ko)}function Zg(n){Sr(ko.current);var e=Sr(ti.current),t=Au(e,n.type);e!==t&&(at(Oo,n),at(ti,t))}function cd(n){Oo.current===n&&(dt(ti),dt(Oo))}var pt=nr(0);function Tl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function ud(){for(var n=0;n<bc.length;n++)bc[n]._workInProgressVersionPrimary=null;bc.length=0}var qa=Ei.ReactCurrentDispatcher,Pc=Ei.ReactCurrentBatchConfig,br=0,mt=null,Tt=null,Pt=null,Cl=!1,vo=!1,Fo=0,ox=0;function Gt(){throw Error(ie(321))}function fd(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Yn(n[t],e[t]))return!1;return!0}function dd(n,e,t,i,r,s){if(br=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qa.current=n===null||n.memoizedState===null?ux:fx,n=t(i,r),vo){s=0;do{if(vo=!1,Fo=0,25<=s)throw Error(ie(301));s+=1,Pt=Tt=null,e.updateQueue=null,qa.current=dx,n=t(i,r)}while(vo)}if(qa.current=Rl,e=Tt!==null&&Tt.next!==null,br=0,Pt=Tt=mt=null,Cl=!1,e)throw Error(ie(300));return n}function hd(){var n=Fo!==0;return Fo=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?mt.memoizedState=Pt=n:Pt=Pt.next=n,Pt}function Nn(){if(Tt===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var e=Pt===null?mt.memoizedState:Pt.next;if(e!==null)Pt=e,Tt=n;else{if(n===null)throw Error(ie(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?mt.memoizedState=Pt=n:Pt=Pt.next=n}return Pt}function zo(n,e){return typeof e=="function"?e(n):e}function Lc(n){var e=Nn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=Tt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((br&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=u,Pr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,mt.lanes|=s,Pr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Dc(n){var e=Nn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Qg(){}function Jg(n,e){var t=mt,i=Nn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,pd(n_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(t.flags|=2048,Bo(9,t_.bind(null,t,i,r,e),void 0,null),Dt===null)throw Error(ie(349));br&30||e_(t,e,r)}return r}function e_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function t_(n,e,t,i){e.value=t,e.getSnapshot=i,i_(e)&&r_(n)}function n_(n,e,t){return t(function(){i_(e)&&r_(n)})}function i_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Yn(n,t)}catch{return!0}}function r_(n){var e=yi(n,1);e!==null&&$n(e,n,1,-1)}function Ph(n){var e=Zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},e.queue=n,n=n.dispatch=cx.bind(null,mt,n),[e.memoizedState,n]}function Bo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function s_(){return Nn().memoizedState}function Ka(n,e,t,i){var r=Zn();mt.flags|=n,r.memoizedState=Bo(1|e,t,void 0,i===void 0?null:i)}function jl(n,e,t,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&fd(i,o.deps)){r.memoizedState=Bo(e,t,s,i);return}}mt.flags|=n,r.memoizedState=Bo(1|e,t,s,i)}function Lh(n,e){return Ka(8390656,8,n,e)}function pd(n,e){return jl(2048,8,n,e)}function o_(n,e){return jl(4,2,n,e)}function a_(n,e){return jl(4,4,n,e)}function l_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function c_(n,e,t){return t=t!=null?t.concat([n]):null,jl(4,4,l_.bind(null,e,n),t)}function md(){}function u_(n,e){var t=Nn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function f_(n,e){var t=Nn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function d_(n,e,t){return br&21?(Yn(t,e)||(t=_g(),mt.lanes|=t,Pr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,cn=!0),n.memoizedState=t)}function ax(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=Pc.transition;Pc.transition={};try{n(!1),e()}finally{nt=t,Pc.transition=i}}function h_(){return Nn().memoizedState}function lx(n,e,t){var i=Xi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},p_(n))m_(e,t);else if(t=qg(n,e,t,i),t!==null){var r=Jt();$n(t,n,i,r),g_(t,e,i)}}function cx(n,e,t){var i=Xi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(p_(n))m_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=qg(n,e,r,i),t!==null&&(r=Jt(),$n(t,n,i,r),g_(t,e,i))}}function p_(n){var e=n.alternate;return n===mt||e!==null&&e===mt}function m_(n,e){vo=Cl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function g_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,jf(n,t)}}var Rl={readContext:Un,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},ux={readContext:Un,useCallback:function(n,e){return Zn().memoizedState=[n,e===void 0?null:e],n},useContext:Un,useEffect:Lh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ka(4194308,4,l_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ka(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ka(4,2,n,e)},useMemo:function(n,e){var t=Zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Zn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=lx.bind(null,mt,n),[i.memoizedState,n]},useRef:function(n){var e=Zn();return n={current:n},e.memoizedState=n},useState:Ph,useDebugValue:md,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=Ph(!1),e=n[0];return n=ax.bind(null,n[1]),Zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=mt,r=Zn();if(ht){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),Dt===null)throw Error(ie(349));br&30||e_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Lh(n_.bind(null,i,s,n),[n]),i.flags|=2048,Bo(9,t_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Zn(),e=Dt.identifierPrefix;if(ht){var t=hi,i=di;t=(i&~(1<<32-jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Fo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ox++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},fx={readContext:Un,useCallback:u_,useContext:Un,useEffect:pd,useImperativeHandle:c_,useInsertionEffect:o_,useLayoutEffect:a_,useMemo:f_,useReducer:Lc,useRef:s_,useState:function(){return Lc(zo)},useDebugValue:md,useDeferredValue:function(n){var e=Nn();return d_(e,Tt.memoizedState,n)},useTransition:function(){var n=Lc(zo)[0],e=Nn().memoizedState;return[n,e]},useMutableSource:Qg,useSyncExternalStore:Jg,useId:h_,unstable_isNewReconciler:!1},dx={readContext:Un,useCallback:u_,useContext:Un,useEffect:pd,useImperativeHandle:c_,useInsertionEffect:o_,useLayoutEffect:a_,useMemo:f_,useReducer:Dc,useRef:s_,useState:function(){return Dc(zo)},useDebugValue:md,useDeferredValue:function(n){var e=Nn();return Tt===null?e.memoizedState=n:d_(e,Tt.memoizedState,n)},useTransition:function(){var n=Dc(zo)[0],e=Nn().memoizedState;return[n,e]},useMutableSource:Qg,useSyncExternalStore:Jg,useId:h_,unstable_isNewReconciler:!1};function Bn(n,e){if(n&&n.defaultProps){e=gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Yu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var $l={isMounted:function(n){return(n=n._reactInternals)?Nr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Jt(),r=Xi(n),s=gi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Vi(n,s,r),e!==null&&($n(e,n,r,i),Ya(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Jt(),r=Xi(n),s=gi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Vi(n,s,r),e!==null&&($n(e,n,r,i),Ya(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Jt(),i=Xi(n),r=gi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(n,r,i),e!==null&&($n(e,n,i,t),Ya(e,n,i))}};function Dh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(t,i)||!Do(r,s):!0}function __(n,e,t){var i=!1,r=Ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Ar:Yt.current,i=e.contextTypes,s=(i=i!=null)?bs(n,r):Ji),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Ih(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&$l.enqueueReplaceState(e,e.state,null)}function qu(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},ad(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Ar:Yt.current,r.context=bs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$l.enqueueReplaceState(r,r.state,null),Ml(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,e){try{var t="",i=e;do t+=B0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ic(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ku(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var hx=typeof WeakMap=="function"?WeakMap:Map;function v_(n,e,t){t=gi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){wl||(wl=!0,af=i),Ku(n,e)},t}function y_(n,e,t){t=gi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ku(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ku(n,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Uh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new hx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Ax.bind(null,n,e,t),e.then(n,n))}function Nh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Oh(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=gi(-1,1),e.tag=2,Vi(t,e,1))),t.lanes|=1),n)}var px=Ei.ReactCurrentOwner,cn=!1;function Zt(n,e,t,i){e.child=n===null?Yg(e,null,t,i):Ls(e,n.child,t,i)}function kh(n,e,t,i,r){t=t.render;var s=e.ref;return Ms(e,r),i=dd(n,e,t,i,s,r),t=hd(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,xi(n,e,r)):(ht&&t&&ed(e),e.flags|=1,Zt(n,e,i,r),e.child)}function Fh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Md(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,x_(n,e,s,i,r)):(n=el(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Do,t(o,i)&&n.ref===e.ref)return xi(n,e,r)}return e.flags|=1,n=ji(s,i),n.ref=e.ref,n.return=e,e.child=n}function x_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Do(s,i)&&n.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(cn=!0);else return e.lanes=n.lanes,xi(n,e,r)}return Zu(n,e,t,i,r)}function S_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ms,_n),_n|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,at(ms,_n),_n|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,at(ms,_n),_n|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,at(ms,_n),_n|=i;return Zt(n,e,r,t),e.child}function E_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Zu(n,e,t,i,r){var s=fn(t)?Ar:Yt.current;return s=bs(e,s),Ms(e,r),t=dd(n,e,t,i,s,r),i=hd(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,xi(n,e,r)):(ht&&i&&ed(e),e.flags|=1,Zt(n,e,t,r),e.child)}function zh(n,e,t,i,r){if(fn(t)){var s=!0;vl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)Za(n,e),__(e,t,i),qu(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=fn(t)?Ar:Yt.current,c=bs(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ih(e,o,i,c),Li=!1;var h=e.memoizedState;o.state=h,Ml(e,i,o,r),l=e.memoizedState,a!==i||h!==l||un.current||Li?(typeof u=="function"&&(Yu(e,t,u,i),l=e.memoizedState),(a=Li||Dh(e,t,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Kg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(t)?Ar:Yt.current,l=bs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Ih(e,o,i,l),Li=!1,h=e.memoizedState,o.state=h,Ml(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||un.current||Li?(typeof p=="function"&&(Yu(e,t,p,i),y=e.memoizedState),(c=Li||Dh(e,t,c,i,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Qu(n,e,t,i,s,r)}function Qu(n,e,t,i,r,s){E_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Th(e,t,!1),xi(n,e,s);i=e.stateNode,px.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ls(e,n.child,null,s),e.child=Ls(e,null,a,s)):Zt(n,e,a,s),e.memoizedState=i.state,r&&Th(e,t,!0),e.child}function M_(n){var e=n.stateNode;e.pendingContext?Mh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Mh(n,e.context,!1),ld(n,e.containerInfo)}function Bh(n,e,t,i,r){return Ps(),nd(r),e.flags|=256,Zt(n,e,t,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ef(n){return{baseLanes:n,cachePool:null,transitions:null}}function T_(n,e,t){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),at(pt,r&1),n===null)return ju(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,i,0,null),n=Mr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ef(t),e.memoizedState=Ju,n):gd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return mx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ji(a,s):(s=Mr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ef(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ju,i}return s=n.child,n=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function gd(n,e){return e=Kl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ga(n,e,t,i){return i!==null&&nd(i),Ls(e,n.child,null,t),n=gd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function mx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ic(Error(ie(422))),ga(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ls(e,n.child,null,o),e.child.memoizedState=ef(o),e.memoizedState=Ju,s);if(!(e.mode&1))return ga(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Ic(s,i,void 0),ga(n,e,o,i)}if(a=(o&n.childLanes)!==0,cn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(n,r),$n(i,n,r,-1))}return Ed(),i=Ic(Error(ie(421))),ga(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=wx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vn=Hi(r.nextSibling),yn=e,ht=!0,Hn=null,n!==null&&(An[wn++]=di,An[wn++]=hi,An[wn++]=wr,di=n.id,hi=n.overflow,wr=e),e=gd(e,i.children),e.flags|=4096,e)}function Gh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),$u(n.return,e,t)}function Uc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function C_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(n,e,i.children,t),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gh(n,t,e);else if(n.tag===19)Gh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Tl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Uc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Tl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Uc(e,!0,t,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function xi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Pr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=ji(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ji(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function gx(n,e,t){switch(e.tag){case 3:M_(e),Ps();break;case 5:Zg(e);break;case 1:fn(e.type)&&vl(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):t&e.child.childLanes?T_(n,e,t):(at(pt,pt.current&1),n=xi(n,e,t),n!==null?n.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return C_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,S_(n,e,t)}return xi(n,e,t)}var R_,tf,A_,w_;R_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};tf=function(){};A_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Sr(ti.current);var s=null;switch(t){case"input":r=Mu(n,r),i=Mu(n,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Ru(n,r),i=Ru(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=gl)}wu(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};w_=function(n,e,t,i){t!==i&&(e.flags|=4)};function Js(n,e){if(!ht)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ht(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function _x(n,e,t){var i=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return fn(e.type)&&_l(),Ht(e),null;case 3:return i=e.stateNode,Ds(),dt(un),dt(Yt),ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(pa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(uf(Hn),Hn=null))),tf(n,e),Ht(e),null;case 5:cd(e);var r=Sr(ko.current);if(t=e.type,n!==null&&e.stateNode!=null)A_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ht(e),null}if(n=Sr(ti.current),pa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[No]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<uo.length;r++)ut(uo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Kd(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Qd(i,s),ut("invalid",i)}wu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,n),r=["children",""+a]):Co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(t){case"input":sa(i),Zd(i,s,!0);break;case"textarea":sa(i),Jd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ng(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Jn]=e,n[No]=i,R_(n,e,!1,!1),e.stateNode=n;e:{switch(o=bu(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<uo.length;r++)ut(uo[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":Kd(n,i),r=Mu(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ut("invalid",n);break;case"textarea":Qd(n,i),r=Ru(n,i),ut("invalid",n);break;default:r=i}wu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ro(n,l):typeof l=="number"&&Ro(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&Bf(n,s,l,o))}switch(t){case"input":sa(n),Zd(n,i,!1);break;case"textarea":sa(n),Jd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Qi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ys(n,!!i.multiple,s,!1):i.defaultValue!=null&&ys(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=gl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(n&&e.stateNode!=null)w_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Sr(ko.current),Sr(ti.current),pa(e)){if(i=e.stateNode,t=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==t)&&(n=yn,n!==null))switch(n.tag){case 3:ha(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ha(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Ht(e),null;case 13:if(dt(pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ht&&vn!==null&&e.mode&1&&!(e.flags&128))jg(),Ps(),e.flags|=98560,s=!1;else if(s=pa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Jn]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Hn!==null&&(uf(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||pt.current&1?Ct===0&&(Ct=3):Ed())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Ds(),tf(n,e),n===null&&Io(e.stateNode.containerInfo),Ht(e),null;case 10:return sd(e.type._context),Ht(e),null;case 17:return fn(e.type)&&_l(),Ht(e),null;case 19:if(dt(pt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Js(s,!1);else{if(Ct!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Tl(n),o!==null){for(e.flags|=128,Js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return at(pt,pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&vt()>Us&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(n=Tl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Ht(e),null}else 2*vt()-s.renderingStartTime>Us&&t!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,t=pt.current,at(pt,i?t&1|2:t&1),e):(Ht(e),null);case 22:case 23:return Sd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function vx(n,e){switch(td(e),e.tag){case 1:return fn(e.type)&&_l(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ds(),dt(un),dt(Yt),ud(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return cd(e),null;case 13:if(dt(pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ps()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(pt),null;case 4:return Ds(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var _a=!1,jt=!1,yx=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ps(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){_t(n,e,i)}else t.current=null}function nf(n,e,t){try{t()}catch(i){_t(n,e,i)}}var Hh=!1;function xx(n,e){if(zu=hl,n=Ig(),Jf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bu={focusedElem:n,selectionRange:t},hl=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,m=y.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Bn(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){_t(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return y=Hh,Hh=!1,y}function yo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&nf(e,t,s)}r=r.next}while(r!==i)}}function Yl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function rf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function b_(n){var e=n.alternate;e!==null&&(n.alternate=null,b_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Jn],delete e[No],delete e[Vu],delete e[nx],delete e[ix])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function P_(n){return n.tag===5||n.tag===3||n.tag===4}function Vh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||P_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(n=n.child,n!==null))for(sf(n,e,t),n=n.sibling;n!==null;)sf(n,e,t),n=n.sibling}function of(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(of(n,e,t),n=n.sibling;n!==null;)of(n,e,t),n=n.sibling}var Ot=null,Gn=!1;function Ti(n,e,t){for(t=t.child;t!==null;)L_(n,e,t),t=t.sibling}function L_(n,e,t){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Bl,t)}catch{}switch(t.tag){case 5:jt||ps(t,e);case 6:var i=Ot,r=Gn;Ot=null,Ti(n,e,t),Ot=i,Gn=r,Ot!==null&&(Gn?(n=Ot,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ot.removeChild(t.stateNode));break;case 18:Ot!==null&&(Gn?(n=Ot,t=t.stateNode,n.nodeType===8?Ac(n.parentNode,t):n.nodeType===1&&Ac(n,t),Po(n)):Ac(Ot,t.stateNode));break;case 4:i=Ot,r=Gn,Ot=t.stateNode.containerInfo,Gn=!0,Ti(n,e,t),Ot=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nf(t,e,o),r=r.next}while(r!==i)}Ti(n,e,t);break;case 1:if(!jt&&(ps(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){_t(t,e,a)}Ti(n,e,t);break;case 21:Ti(n,e,t);break;case 22:t.mode&1?(jt=(i=jt)||t.memoizedState!==null,Ti(n,e,t),jt=i):Ti(n,e,t);break;default:Ti(n,e,t)}}function Wh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new yx),e.forEach(function(i){var r=bx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function On(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Gn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Gn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Ot===null)throw Error(ie(160));L_(s,o,r),Ot=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D_(e,n),e=e.sibling}function D_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(e,n),Kn(n),i&4){try{yo(3,n,n.return),Yl(3,n)}catch(v){_t(n,n.return,v)}try{yo(5,n,n.return)}catch(v){_t(n,n.return,v)}}break;case 1:On(e,n),Kn(n),i&512&&t!==null&&ps(t,t.return);break;case 5:if(On(e,n),Kn(n),i&512&&t!==null&&ps(t,t.return),n.flags&32){var r=n.stateNode;try{Ro(r,"")}catch(v){_t(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&eg(r,s),bu(a,o);var c=bu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?sg(r,d):u==="dangerouslySetInnerHTML"?ig(r,d):u==="children"?Ro(r,d):Bf(r,u,d,c)}switch(a){case"input":Tu(r,s);break;case"textarea":tg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ys(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[No]=s}catch(v){_t(n,n.return,v)}}break;case 6:if(On(e,n),Kn(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){_t(n,n.return,v)}}break;case 3:if(On(e,n),Kn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(v){_t(n,n.return,v)}break;case 4:On(e,n),Kn(n);break;case 13:On(e,n),Kn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yd=vt())),i&4&&Wh(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(jt=(c=jt)||u,On(e,n),jt=c):On(e,n),Kn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ge=n,u=n.child;u!==null;){for(d=ge=u;ge!==null;){switch(h=ge,p=h.child,h.tag){case 0:case 11:case 14:case 15:yo(4,h,h.return);break;case 1:ps(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){_t(i,t,v)}}break;case 5:ps(h,h.return);break;case 22:if(h.memoizedState!==null){jh(d);continue}}p!==null?(p.return=h,ge=p):jh(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rg("display",o))}catch(v){_t(n,n.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){_t(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:On(e,n),Kn(n),i&4&&Wh(n);break;case 21:break;default:On(e,n),Kn(n)}}function Kn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(P_(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ro(r,""),i.flags&=-33);var s=Vh(n);of(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Vh(n);sf(n,a,o);break;default:throw Error(ie(161))}}catch(l){_t(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Sx(n,e,t){ge=n,I_(n)}function I_(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_a;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=_a;var c=jt;if(_a=o,(jt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?$h(r):l!==null?(l.return=o,ge=l):$h(r);for(;s!==null;)ge=s,I_(s),s=s.sibling;ge=r,_a=a,jt=c}Xh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Xh(n)}}function Xh(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Bn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}bh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Po(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}jt||e.flags&512&&rf(e)}catch(h){_t(e,e.return,h)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function jh(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function $h(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Yl(4,e)}catch(l){_t(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{rf(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{rf(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===n){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var Ex=Math.ceil,Al=Ei.ReactCurrentDispatcher,_d=Ei.ReactCurrentOwner,In=Ei.ReactCurrentBatchConfig,$e=0,Dt=null,Mt=null,Ft=0,_n=0,ms=nr(0),Ct=0,Go=null,Pr=0,ql=0,vd=0,xo=null,on=null,yd=0,Us=1/0,ci=null,wl=!1,af=null,Wi=null,va=!1,Ni=null,bl=0,So=0,lf=null,Qa=-1,Ja=0;function Jt(){return $e&6?vt():Qa!==-1?Qa:Qa=vt()}function Xi(n){return n.mode&1?$e&2&&Ft!==0?Ft&-Ft:sx.transition!==null?(Ja===0&&(Ja=_g()),Ja):(n=nt,n!==0||(n=window.event,n=n===void 0?16:Tg(n.type)),n):1}function $n(n,e,t,i){if(50<So)throw So=0,lf=null,Error(ie(185));jo(n,t,i),(!($e&2)||n!==Dt)&&(n===Dt&&(!($e&2)&&(ql|=t),Ct===4&&Ii(n,Ft)),dn(n,i),t===1&&$e===0&&!(e.mode&1)&&(Us=vt()+500,Xl&&ir()))}function dn(n,e){var t=n.callbackNode;sy(n,e);var i=dl(n,n===Dt?Ft:0);if(i===0)t!==null&&nh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&nh(t),e===1)n.tag===0?rx(Yh.bind(null,n)):Vg(Yh.bind(null,n)),ex(function(){!($e&6)&&ir()}),t=null;else{switch(vg(i)){case 1:t=Xf;break;case 4:t=mg;break;case 16:t=fl;break;case 536870912:t=gg;break;default:t=fl}t=G_(t,U_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function U_(n,e){if(Qa=-1,Ja=0,$e&6)throw Error(ie(327));var t=n.callbackNode;if(Ts()&&n.callbackNode!==t)return null;var i=dl(n,n===Dt?Ft:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Pl(n,i);else{e=i;var r=$e;$e|=2;var s=O_();(Dt!==n||Ft!==e)&&(ci=null,Us=vt()+500,Er(n,e));do try{Cx();break}catch(a){N_(n,a)}while(!0);rd(),Al.current=s,$e=r,Mt!==null?e=0:(Dt=null,Ft=0,e=Ct)}if(e!==0){if(e===2&&(r=Uu(n),r!==0&&(i=r,e=cf(n,r))),e===1)throw t=Go,Er(n,0),Ii(n,i),dn(n,vt()),t;if(e===6)Ii(n,i);else{if(r=n.current.alternate,!(i&30)&&!Mx(r)&&(e=Pl(n,i),e===2&&(s=Uu(n),s!==0&&(i=s,e=cf(n,s))),e===1))throw t=Go,Er(n,0),Ii(n,i),dn(n,vt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:hr(n,on,ci);break;case 3:if(Ii(n,i),(i&130023424)===i&&(e=yd+500-vt(),10<e)){if(dl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Jt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Hu(hr.bind(null,n,on,ci),e);break}hr(n,on,ci);break;case 4:if(Ii(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ex(i/1960))-i,10<i){n.timeoutHandle=Hu(hr.bind(null,n,on,ci),i);break}hr(n,on,ci);break;case 5:hr(n,on,ci);break;default:throw Error(ie(329))}}}return dn(n,vt()),n.callbackNode===t?U_.bind(null,n):null}function cf(n,e){var t=xo;return n.current.memoizedState.isDehydrated&&(Er(n,e).flags|=256),n=Pl(n,e),n!==2&&(e=on,on=t,e!==null&&uf(e)),n}function uf(n){on===null?on=n:on.push.apply(on,n)}function Mx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(n,e){for(e&=~vd,e&=~ql,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-jn(e),i=1<<t;n[t]=-1,e&=~i}}function Yh(n){if($e&6)throw Error(ie(327));Ts();var e=dl(n,0);if(!(e&1))return dn(n,vt()),null;var t=Pl(n,e);if(n.tag!==0&&t===2){var i=Uu(n);i!==0&&(e=i,t=cf(n,i))}if(t===1)throw t=Go,Er(n,0),Ii(n,e),dn(n,vt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,hr(n,on,ci),dn(n,vt()),null}function xd(n,e){var t=$e;$e|=1;try{return n(e)}finally{$e=t,$e===0&&(Us=vt()+500,Xl&&ir())}}function Lr(n){Ni!==null&&Ni.tag===0&&!($e&6)&&Ts();var e=$e;$e|=1;var t=In.transition,i=nt;try{if(In.transition=null,nt=1,n)return n()}finally{nt=i,In.transition=t,$e=e,!($e&6)&&ir()}}function Sd(){_n=ms.current,dt(ms)}function Er(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Jy(t)),Mt!==null)for(t=Mt.return;t!==null;){var i=t;switch(td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Ds(),dt(un),dt(Yt),ud();break;case 5:cd(i);break;case 4:Ds();break;case 13:dt(pt);break;case 19:dt(pt);break;case 10:sd(i.type._context);break;case 22:case 23:Sd()}t=t.return}if(Dt=n,Mt=n=ji(n.current,null),Ft=_n=e,Ct=0,Go=null,vd=ql=Pr=0,on=xo=null,xr!==null){for(e=0;e<xr.length;e++)if(t=xr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}xr=null}return n}function N_(n,e){do{var t=Mt;try{if(rd(),qa.current=Rl,Cl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(br=0,Pt=Tt=mt=null,vo=!1,Fo=0,_d.current=null,t===null||t.return===null){Ct=1,Go=e,Mt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Nh(o);if(p!==null){p.flags&=-257,Oh(p,o,a,s,e),p.mode&1&&Uh(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Uh(s,c,e),Ed();break e}l=Error(ie(426))}}else if(ht&&a.mode&1){var m=Nh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Oh(m,o,a,s,e),nd(Is(l,a));break e}}s=l=Is(l,a),Ct!==4&&(Ct=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=v_(s,l,e);wh(s,f);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wi===null||!Wi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=y_(s,a,e);wh(s,S);break e}}s=s.return}while(s!==null)}F_(t)}catch(L){e=L,Mt===t&&t!==null&&(Mt=t=t.return);continue}break}while(!0)}function O_(){var n=Al.current;return Al.current=Rl,n===null?Rl:n}function Ed(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Pr&268435455)&&!(ql&268435455)||Ii(Dt,Ft)}function Pl(n,e){var t=$e;$e|=2;var i=O_();(Dt!==n||Ft!==e)&&(ci=null,Er(n,e));do try{Tx();break}catch(r){N_(n,r)}while(!0);if(rd(),$e=t,Al.current=i,Mt!==null)throw Error(ie(261));return Dt=null,Ft=0,Ct}function Tx(){for(;Mt!==null;)k_(Mt)}function Cx(){for(;Mt!==null&&!K0();)k_(Mt)}function k_(n){var e=B_(n.alternate,n,_n);n.memoizedProps=n.pendingProps,e===null?F_(n):Mt=e,_d.current=null}function F_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=vx(t,e),t!==null){t.flags&=32767,Mt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ct=6,Mt=null;return}}else if(t=_x(t,e,_n),t!==null){Mt=t;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=n}while(e!==null);Ct===0&&(Ct=5)}function hr(n,e,t){var i=nt,r=In.transition;try{In.transition=null,nt=1,Rx(n,e,t,i)}finally{In.transition=r,nt=i}return null}function Rx(n,e,t,i){do Ts();while(Ni!==null);if($e&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(oy(n,s),n===Dt&&(Mt=Dt=null,Ft=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||va||(va=!0,G_(fl,function(){return Ts(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=nt;nt=1;var a=$e;$e|=4,_d.current=null,xx(n,t),D_(t,n),jy(Bu),hl=!!zu,Bu=zu=null,n.current=t,Sx(t),Z0(),$e=a,nt=o,In.transition=s}else n.current=t;if(va&&(va=!1,Ni=n,bl=r),s=n.pendingLanes,s===0&&(Wi=null),ey(t.stateNode),dn(n,vt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(wl)throw wl=!1,n=af,af=null,n;return bl&1&&n.tag!==0&&Ts(),s=n.pendingLanes,s&1?n===lf?So++:(So=0,lf=n):So=0,ir(),null}function Ts(){if(Ni!==null){var n=vg(bl),e=In.transition,t=nt;try{if(In.transition=null,nt=16>n?16:n,Ni===null)var i=!1;else{if(n=Ni,Ni=null,bl=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,ge=n.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:yo(8,u,s)}var d=u.child;if(d!==null)d.return=u,ge=d;else for(;ge!==null;){u=ge;var h=u.sibling,p=u.return;if(b_(u),u===c){ge=null;break}if(h!==null){h.return=p,ge=h;break}ge=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ge=f;break e}ge=s.return}}var g=n.current;for(ge=g;ge!==null;){o=ge;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ge=_;else e:for(o=g;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(L){_t(a,a.return,L)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if($e=r,ir(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Bl,n)}catch{}i=!0}return i}finally{nt=t,In.transition=e}}return!1}function qh(n,e,t){e=Is(t,e),e=v_(n,e,1),n=Vi(n,e,1),e=Jt(),n!==null&&(jo(n,1,e),dn(n,e))}function _t(n,e,t){if(n.tag===3)qh(n,n,t);else for(;e!==null;){if(e.tag===3){qh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){n=Is(t,n),n=y_(e,n,1),e=Vi(e,n,1),n=Jt(),e!==null&&(jo(e,1,n),dn(e,n));break}}e=e.return}}function Ax(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Jt(),n.pingedLanes|=n.suspendedLanes&t,Dt===n&&(Ft&t)===t&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>vt()-yd?Er(n,0):vd|=t),dn(n,e)}function z_(n,e){e===0&&(n.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var t=Jt();n=yi(n,e),n!==null&&(jo(n,e,t),dn(n,t))}function wx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),z_(n,t)}function bx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),z_(n,t)}var B_;B_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return cn=!1,gx(n,e,t);cn=!!(n.flags&131072)}else cn=!1,ht&&e.flags&1048576&&Wg(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Za(n,e),n=e.pendingProps;var r=bs(e,Yt.current);Ms(e,t),r=dd(null,e,i,n,r,t);var s=hd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ad(e),r.updater=$l,e.stateNode=r,r._reactInternals=e,qu(e,i,n,t),e=Qu(null,e,i,!0,s,t)):(e.tag=0,ht&&s&&ed(e),Zt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Za(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Lx(i),n=Bn(i,n),r){case 0:e=Zu(null,e,i,n,t);break e;case 1:e=zh(null,e,i,n,t);break e;case 11:e=kh(null,e,i,n,t);break e;case 14:e=Fh(null,e,i,Bn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Zu(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),zh(n,e,i,r,t);case 3:e:{if(M_(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kg(n,e),Ml(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(ie(423)),e),e=Bh(n,e,i,t,r);break e}else if(i!==r){r=Is(Error(ie(424)),e),e=Bh(n,e,i,t,r);break e}else for(vn=Hi(e.stateNode.containerInfo.firstChild),yn=e,ht=!0,Hn=null,t=Yg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ps(),i===r){e=xi(n,e,t);break e}Zt(n,e,i,t)}e=e.child}return e;case 5:return Zg(e),n===null&&ju(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Gu(i,r)?o=null:s!==null&&Gu(i,s)&&(e.flags|=32),E_(n,e),Zt(n,e,o,t),e.child;case 6:return n===null&&ju(e),null;case 13:return T_(n,e,t);case 4:return ld(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ls(e,null,i,t):Zt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),kh(n,e,i,r,t);case 7:return Zt(n,e,e.pendingProps,t),e.child;case 8:return Zt(n,e,e.pendingProps.children,t),e.child;case 12:return Zt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(Sl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!un.current){e=xi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),$u(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),$u(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,t),r=Un(r),i=i(r),e.flags|=1,Zt(n,e,i,t),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Fh(n,e,i,r,t);case 15:return x_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Za(n,e),e.tag=1,fn(i)?(n=!0,vl(e)):n=!1,Ms(e,t),__(e,i,r),qu(e,i,r,t),Qu(null,e,i,!0,n,t);case 19:return C_(n,e,t);case 22:return S_(n,e,t)}throw Error(ie(156,e.tag))};function G_(n,e){return pg(n,e)}function Px(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,e,t,i){return new Px(n,e,t,i)}function Md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lx(n){if(typeof n=="function")return Md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Hf)return 11;if(n===Vf)return 14}return 2}function ji(n,e){var t=n.alternate;return t===null?(t=Dn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function el(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Md(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ss:return Mr(t.children,r,s,e);case Gf:o=8,r|=8;break;case yu:return n=Dn(12,t,e,r|2),n.elementType=yu,n.lanes=s,n;case xu:return n=Dn(13,t,e,r),n.elementType=xu,n.lanes=s,n;case Su:return n=Dn(19,t,e,r),n.elementType=Su,n.lanes=s,n;case Zm:return Kl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case qm:o=10;break e;case Km:o=9;break e;case Hf:o=11;break e;case Vf:o=14;break e;case Pi:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=Dn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Mr(n,e,t,i){return n=Dn(7,n,i,e),n.lanes=t,n}function Kl(n,e,t,i){return n=Dn(22,n,i,e),n.elementType=Zm,n.lanes=t,n.stateNode={isHidden:!1},n}function Nc(n,e,t){return n=Dn(6,n,null,e),n.lanes=t,n}function Oc(n,e,t){return e=Dn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Dx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gc(0),this.expirationTimes=gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Td(n,e,t,i,r,s,o,a,l){return n=new Dx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),n}function Ix(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function H_(n){if(!n)return Ji;n=n._reactInternals;e:{if(Nr(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(fn(t))return Hg(n,t,e)}return e}function V_(n,e,t,i,r,s,o,a,l){return n=Td(t,i,!0,n,r,s,o,a,l),n.context=H_(null),t=n.current,i=Jt(),r=Xi(t),s=gi(i,r),s.callback=e??null,Vi(t,s,r),n.current.lanes=r,jo(n,r,i),dn(n,i),n}function Zl(n,e,t,i){var r=e.current,s=Jt(),o=Xi(r);return t=H_(t),e.context===null?e.context=t:e.pendingContext=t,e=gi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Vi(r,e,o),n!==null&&($n(n,r,o,s),Ya(n,r,o)),o}function Ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Cd(n,e){Kh(n,e),(n=n.alternate)&&Kh(n,e)}function Ux(){return null}var W_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rd(n){this._internalRoot=n}Ql.prototype.render=Rd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));Zl(n,e,null,null)};Ql.prototype.unmount=Rd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Lr(function(){Zl(null,n,null,null)}),e[vi]=null}};function Ql(n){this._internalRoot=n}Ql.prototype.unstable_scheduleHydration=function(n){if(n){var e=Sg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Di.length&&e!==0&&e<Di[t].priority;t++);Di.splice(t,0,n),t===0&&Mg(n)}};function Ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Jl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zh(){}function Nx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ll(o);s.call(c)}}var o=V_(e,i,n,0,null,!1,!1,"",Zh);return n._reactRootContainer=o,n[vi]=o.current,Io(n.nodeType===8?n.parentNode:n),Lr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ll(l);a.call(c)}}var l=Td(n,0,!1,null,null,!1,!1,"",Zh);return n._reactRootContainer=l,n[vi]=l.current,Io(n.nodeType===8?n.parentNode:n),Lr(function(){Zl(e,l,t,i)}),l}function ec(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ll(o);a.call(l)}}Zl(e,o,n,r)}else o=Nx(t,e,n,r,i);return Ll(o)}yg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=co(e.pendingLanes);t!==0&&(jf(e,t|1),dn(e,vt()),!($e&6)&&(Us=vt()+500,ir()))}break;case 13:Lr(function(){var i=yi(n,1);if(i!==null){var r=Jt();$n(i,n,1,r)}}),Cd(n,1)}};$f=function(n){if(n.tag===13){var e=yi(n,134217728);if(e!==null){var t=Jt();$n(e,n,134217728,t)}Cd(n,134217728)}};xg=function(n){if(n.tag===13){var e=Xi(n),t=yi(n,e);if(t!==null){var i=Jt();$n(t,n,e,i)}Cd(n,e)}};Sg=function(){return nt};Eg=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};Lu=function(n,e,t){switch(e){case"input":if(Tu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Wl(i);if(!r)throw Error(ie(90));Jm(i),Tu(i,r)}}}break;case"textarea":tg(n,t);break;case"select":e=t.value,e!=null&&ys(n,!!t.multiple,e,!1)}};lg=xd;cg=Lr;var Ox={usingClientEntryPoint:!1,Events:[Yo,cs,Wl,og,ag,xd]},eo={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kx={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dg(n),n===null?null:n.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||Ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Bl=ya.inject(kx),ei=ya}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;En.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(e))throw Error(ie(200));return Ix(n,e,null,t)};En.createRoot=function(n,e){if(!Ad(n))throw Error(ie(299));var t=!1,i="",r=W_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Td(n,1,!1,null,null,t,!1,i,r),n[vi]=e.current,Io(n.nodeType===8?n.parentNode:n),new Rd(e)};En.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=dg(e),n=n===null?null:n.stateNode,n};En.flushSync=function(n){return Lr(n)};En.hydrate=function(n,e,t){if(!Jl(e))throw Error(ie(200));return ec(null,n,e,!0,t)};En.hydrateRoot=function(n,e,t){if(!Ad(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=W_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=V_(e,null,n,1,t??null,r,!1,s,o),n[vi]=e.current,Io(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ql(e)};En.render=function(n,e,t){if(!Jl(e))throw Error(ie(200));return ec(null,n,e,!1,t)};En.unmountComponentAtNode=function(n){if(!Jl(n))throw Error(ie(40));return n._reactRootContainer?(Lr(function(){ec(null,null,n,!1,function(){n._reactRootContainer=null,n[vi]=null})}),!0):!1};En.unstable_batchedUpdates=xd;En.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Jl(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return ec(n,e,t,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(n){console.error(n)}}X_(),Xm.exports=En;var Fx=Xm.exports,j_,Qh=Fx;j_=Qh.createRoot,Qh.hydrateRoot;class zx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Bx(e).buffer}}function Bx(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function $_(n){return new Gx(n).unpack()}function Y_(n){const e=new Hx,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Gx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,o;for(;i<e;)s=t[i],s<160?(o=s,i++):(s^192)<32?(o=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(o=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(o=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(o);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Hx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),o=2**32,a=t<<31|i+1023<<20|s/o&1048575,l=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(l)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new zx,this._textEncoder=new TextEncoder}}let q_=!0,K_=!0;function fo(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function Or(n,e,t){if(!n.RTCPeerConnection)return;const i=n.RTCPeerConnection.prototype,r=i.addEventListener;i.addEventListener=function(o,a){if(o!==e)return r.apply(this,arguments);const l=c=>{const u=t(c);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,l),r.apply(this,[o,l])};const s=i.removeEventListener;i.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);const l=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,l])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Vx(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(q_=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function Wx(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(K_=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function Z_(){if(typeof window=="object"){if(q_)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function wd(n,e){K_&&console.warn(n+" is deprecated, please use "+e+" instead.")}function Xx(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i)return{browser:"chrome",version:parseInt(i.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(fo(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(fo(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(fo(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=fo(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Jh(n){return Object.prototype.toString.call(n)==="[object Object]"}function Q_(n){return Jh(n)?Object.keys(n).reduce(function(e,t){const i=Jh(n[t]),r=i?Q_(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function ff(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?ff(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{ff(n,n.get(r),t)})}))}function ep(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{n.forEach(a=>{a.type===i&&a.trackId===o.id&&ff(n,a,r)})}),r}const tp=Z_;function J_(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const l={};return Object.keys(a).forEach(c=>{if(c==="require"||c==="advanced"||c==="mediaSource")return;const u=typeof a[c]=="object"?a[c]:{ideal:a[c]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const d=function(h,p){return h?h+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(u.ideal!==void 0){l.optional=l.optional||[];let h={};typeof u.ideal=="number"?(h[d("min",c)]=u.ideal,l.optional.push(h),h={},h[d("max",c)]=u.ideal,l.optional.push(h)):(h[d("",c)]=u.ideal,l.optional.push(h))}u.exact!==void 0&&typeof u.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[d("",c)]=u.exact):["min","max"].forEach(h=>{u[h]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[d(h,c)]=u[h])})}),a.advanced&&(l.optional=(l.optional||[]).concat(a.advanced)),l},r=function(a,l){if(e.version>=61)return l(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const c=function(u,d,h){d in u&&!(h in u)&&(u[h]=u[d],delete u[d])};a=JSON.parse(JSON.stringify(a)),c(a.audio,"autoGainControl","googAutoGainControl"),c(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=i(a.audio)}if(a&&typeof a.video=="object"){let c=a.video.facingMode;c=c&&(typeof c=="object"?c:{ideal:c});const u=e.version<66;if(c&&(c.exact==="user"||c.exact==="environment"||c.ideal==="user"||c.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete a.video.facingMode;let d;if(c.exact==="environment"||c.ideal==="environment"?d=["back","rear"]:(c.exact==="user"||c.ideal==="user")&&(d=["front"]),d)return t.mediaDevices.enumerateDevices().then(h=>{h=h.filter(y=>y.kind==="videoinput");let p=h.find(y=>d.some(v=>y.label.toLowerCase().includes(v)));return!p&&h.length&&d.includes("back")&&(p=h[h.length-1]),p&&(a.video.deviceId=c.exact?{exact:p.deviceId}:{ideal:p.deviceId}),a.video=i(a.video),tp("chrome: "+JSON.stringify(a)),l(a)})}a.video=i(a.video)}return tp("chrome: "+JSON.stringify(a)),l(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,l,c){r(a,u=>{t.webkitGetUserMedia(u,l,d=>{c&&c(s(d))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(l){return r(l,c=>a(c).then(u=>{if(c.audio&&!u.getAudioTracks().length||c.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(d=>{d.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function ev(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function tv(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",r=>{let s;n.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===r.track.id):s={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=s,o.transceiver={receiver:s},o.streams=[i.stream],this.dispatchEvent(o)}),i.stream.getTracks().forEach(r=>{let s;n.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===r.id):s={track:r};const o=new Event("track");o.track=r,o.receiver=s,o.transceiver={receiver:s},o.streams=[i.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else Or(n,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function nv(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,l){let c=r.apply(this,arguments);return c||(c=e(this,a),this._senders.push(c)),c};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const l=this._senders.indexOf(a);l!==-1&&this._senders.splice(l,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(l=>l.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function iv(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const t=n.RTCPeerConnection.prototype.getSenders;t&&(n.RTCPeerConnection.prototype.getSenders=function(){const s=t.apply(this,[]);return s.forEach(o=>o._pc=this),s});const i=n.RTCPeerConnection.prototype.addTrack;i&&(n.RTCPeerConnection.prototype.addTrack=function(){const s=i.apply(this,arguments);return s._pc=this,s}),n.RTCRtpSender.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>ep(o,s.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const t=n.RTCPeerConnection.prototype.getReceivers;t&&(n.RTCPeerConnection.prototype.getReceivers=function(){const r=t.apply(this,[]);return r.forEach(s=>s._pc=this),r}),Or(n,"track",i=>(i.receiver._pc=i.srcElement,i)),n.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(s=>ep(s,r.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const e=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const i=arguments[0];let r,s,o;return this.getSenders().forEach(a=>{a.track===i&&(r?o=!0:r=a)}),this.getReceivers().forEach(a=>(a.track===i&&(s?o=!0:s=a),a.track===i)),o||r&&s?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():s?s.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function rv(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const l=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(l)===-1&&this._shimmedLocalStreams[a.id].push(l):this._shimmedLocalStreams[a.id]=[a,l],l};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(c=>{if(this.getSenders().find(d=>d.track===c))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const l=this.getSenders().filter(c=>a.indexOf(c)===-1);this._shimmedLocalStreams[o.id]=[o].concat(l)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const l=this._shimmedLocalStreams[a].indexOf(o);l!==-1&&this._shimmedLocalStreams[a].splice(l,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),r.apply(this,arguments)}}function sv(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return rv(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(d=>this._reverseStreams[d.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(d=>{if(this.getSenders().find(p=>p.track===d))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const d=new n.MediaStream(u.getTracks());this._streams[u.id]=d,this._reverseStreams[d.id]=u,u=d}i.apply(this,[u])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},n.RTCPeerConnection.prototype.addTrack=function(u,d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const h=[].slice.call(arguments,1);if(h.length!==1||!h[0].getTracks().find(v=>v===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const y=this._streams[d.id];if(y)y.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new n.MediaStream([u]);this._streams[d.id]=v,this._reverseStreams[v.id]=d,this.addStream(v)}return this.getSenders().find(v=>v.track===u)};function s(c,u){let d=u.sdp;return Object.keys(c._reverseStreams||[]).forEach(h=>{const p=c._reverseStreams[h],y=c._streams[p.id];d=d.replace(new RegExp(y.id,"g"),p.id)}),new RTCSessionDescription({type:u.type,sdp:d})}function o(c,u){let d=u.sdp;return Object.keys(c._reverseStreams||[]).forEach(h=>{const p=c._reverseStreams[h],y=c._streams[p.id];d=d.replace(new RegExp(p.id,"g"),y.id)}),new RTCSessionDescription({type:u.type,sdp:d})}["createOffer","createAnswer"].forEach(function(c){const u=n.RTCPeerConnection.prototype[c],d={[c](){const h=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[y=>{const v=s(this,y);h[0].apply(null,[v])},y=>{h[1]&&h[1].apply(null,y)},arguments[2]]):u.apply(this,arguments).then(y=>s(this,y))}};n.RTCPeerConnection.prototype[c]=d[c]});const a=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const l=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const c=l.get.apply(this);return c.type===""?c:s(this,c)}}),n.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let h;Object.keys(this._streams).forEach(p=>{this._streams[p].getTracks().find(v=>u.track===v)&&(h=this._streams[p])}),h&&(h.getTracks().length===1?this.removeStream(this._reverseStreams[h.id]):h.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function df(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function ov(n,e){Or(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const np=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:ov,shimAddTrackRemoveTrack:sv,shimAddTrackRemoveTrackWithNative:rv,shimGetSendersWithDtmf:nv,shimGetUserMedia:J_,shimMediaStream:ev,shimOnTrack:tv,shimPeerConnection:df,shimSenderReceiverGetStats:iv},Symbol.toStringTag,{value:"Module"}));function av(n,e){const t=n&&n.navigator,i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,o){wd("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(o,a,l){a in o&&!(l in o)&&(o[l]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o.audio,"autoGainControl","mozAutoGainControl"),r(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},i&&i.prototype.getSettings){const o=i.prototype.getSettings;i.prototype.getSettings=function(){const a=o.apply(this,arguments);return r(a,"mozAutoGainControl","autoGainControl"),r(a,"mozNoiseSuppression","noiseSuppression"),a}}if(i&&i.prototype.applyConstraints){const o=i.prototype.applyConstraints;i.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a,"autoGainControl","mozAutoGainControl"),r(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function jx(n,e){n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||n.navigator.mediaDevices&&(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)})}function lv(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function hf(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection))return;!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(r){const s=n.RTCPeerConnection.prototype[r],o={[r](){return arguments[0]=new(r==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),s.apply(this,arguments)}};n.RTCPeerConnection.prototype[r]=o[r]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return i.apply(this,[s||null]).then(l=>{if(e.version<53&&!o)try{l.forEach(c=>{c.type=t[c.type]||c.type})}catch(c){if(c.name!=="TypeError")throw c;l.forEach((u,d)=>{l.set(d,Object.assign({},u,{type:t[u.type]||u.type}))})}return l}).then(o,a)}}function cv(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function uv(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),Or(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function fv(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){wd("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function dv(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function hv(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.addTransceiver;e&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const r=i.length>0;r&&i.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const s=e.apply(this,arguments);if(r){const{sender:o}=s,a=o.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=i,o.sendEncodings=i,this.setParametersPromises.push(o.setParameters(a).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return s})}function pv(n){if(!(typeof n=="object"&&n.RTCRtpSender))return;const e=n.RTCRtpSender.prototype.getParameters;e&&(n.RTCRtpSender.prototype.getParameters=function(){const i=e.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function mv(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function gv(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const ip=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:hv,shimCreateAnswer:gv,shimCreateOffer:mv,shimGetDisplayMedia:jx,shimGetParameters:pv,shimGetUserMedia:av,shimOnTrack:lv,shimPeerConnection:hf,shimRTCDataChannel:dv,shimReceiverGetStats:uv,shimRemoveStream:fv,shimSenderGetStats:cv},Symbol.toStringTag,{value:"Module"}));function _v(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function vv(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,i.dispatchEvent(o)})}),e.apply(i,arguments)}}}function yv(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,u){const d=arguments.length>=2?arguments[2]:arguments[0],h=t.apply(this,[d]);return u?(h.then(c,u),Promise.resolve()):h},e.createAnswer=function(c,u){const d=arguments.length>=2?arguments[2]:arguments[0],h=i.apply(this,[d]);return u?(h.then(c,u),Promise.resolve()):h};let a=function(l,c,u){const d=r.apply(this,[l]);return u?(d.then(c,u),Promise.resolve()):d};e.setLocalDescription=a,a=function(l,c,u){const d=s.apply(this,[l]);return u?(d.then(c,u),Promise.resolve()):d},e.setRemoteDescription=a,a=function(l,c,u){const d=o.apply(this,[l]);return u?(d.then(c,u),Promise.resolve()):d},e.addIceCandidate=a}function xv(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(Sv(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}).bind(e))}function Sv(n){return n&&n.video!==void 0?Object.assign({},n,{video:Q_(n.video)}):n}function Ev(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let o=0;o<i.iceServers.length;o++){let a=i.iceServers[o];a.urls===void 0&&a.url?(wd("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(i.iceServers[o])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Mv(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Tv(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Cv(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const rp=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Cv,shimCallbacksAPI:yv,shimConstraints:Sv,shimCreateOfferLegacy:Tv,shimGetUserMedia:xv,shimLocalStreamsAPI:_v,shimRTCIceServerUrls:Ev,shimRemoteStreamsAPI:vv,shimTrackEventTransceiver:Mv},Symbol.toStringTag,{value:"Module"}));var Rv={exports:{}};(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(r=>r.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const r={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let s=8;s<i.length;s+=2)switch(i[s]){case"raddr":r.relatedAddress=i[s+1];break;case"rport":r.relatedPort=parseInt(i[s+1],10);break;case"tcptype":r.tcpType=i[s+1];break;case"ufrag":r.ufrag=i[s+1],r.usernameFragment=i[s+1];break;default:r[i[s]]===void 0&&(r[i[s]]=i[s+1]);break}return r},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const r=t.component;r==="rtp"?i.push(1):r==="rtcp"?i.push(2):i.push(r),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const s=t.type;return i.push("typ"),i.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const r={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),r.name=i[0],r.clockRate=parseInt(i[1],10),r.channels=i.length===3?parseInt(i[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<s.length;o++)r=s[o].trim().split("="),i[r[0].trim()]=r[1];return i},e.writeFmtp=function(t){let i="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?s.push(o+"="+t.parameters[o]):s.push(o)}),i+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{i+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,i),10)},s=t.indexOf(":",i);return s>-1?(r.attribute=t.substring(i+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(i+1),r},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(r=>parseInt(r,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let r="a=setup:"+i+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const r=e.matchPrefix(t+i,"a=ice-ufrag:")[0],s=e.matchPrefix(t+i,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let a=3;a<s.length;a++){const l=s[a],c=e.matchPrefix(t,"a=rtpmap:"+l+" ")[0];if(c){const u=e.parseRtpMap(c),d=e.matchPrefix(t,"a=fmtp:"+l+" ");switch(u.parameters=d.length?e.parseFmtp(d[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+l+" ").map(e.parseRtcpFb),i.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{i.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(a=>{o.forEach(l=>{a.rtcpFeedback.find(u=>u.type===l.type&&u.parameter===l.parameter)||a.rtcpFeedback.push(l)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(o=>{r+=e.writeRtpMap(o),r+=e.writeFmtp(o),r+=e.writeRtcpFb(o)});let s=0;return i.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(o=>{r+=e.writeExtmap(o)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,o=r.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(h=>e.parseSsrcMedia(h)).filter(h=>h.attribute==="cname"),l=a.length>0&&a[0].ssrc;let c;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(h=>h.substring(17).split(" ").map(y=>parseInt(y,10)));u.length>0&&u[0].length>1&&u[0][0]===l&&(c=u[0][1]),r.codecs.forEach(h=>{if(h.name.toUpperCase()==="RTX"&&h.parameters.apt){let p={ssrc:l,codecPayloadType:parseInt(h.parameters.apt,10)};l&&c&&(p.rtx={ssrc:c}),i.push(p),s&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:l,mechanism:o?"red+ulpfec":"red"},i.push(p))}}),i.length===0&&l&&i.push({ssrc:l});let d=e.matchPrefix(t,"b=");return d.length&&(d[0].indexOf("b=TIAS:")===0?d=parseInt(d[0].substring(7),10):d[0].indexOf("b=AS:")===0?d=parseInt(d[0].substring(5),10)*1e3*.95-50*40*8:d=void 0,i.forEach(h=>{h.maxBitrate=d})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return i.mux=o.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return i=r[0].substring(7).split(" "),{stream:i[0],track:i[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return i=s[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:i.fmt,maxMessageSize:s};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const l=a[0].substring(10).split(" ");return{port:parseInt(l[0],10),protocol:l[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,i){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&r.push("a=max-message-size:"+i.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,r){let s;const o=i!==void 0?i:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(Rv);var Av=Rv.exports;const Cs=Nm(Av),$x=v0({__proto__:null,default:Cs},[Av]);function tl(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=Cs.parseCandidate(i.candidate);for(const o in s)o in r||Object.defineProperty(r,o,{value:s[o]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,Or(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function pf(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||Or(n,"icecandidate",e=>{if(e.candidate){const t=Cs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function nl(n,e){if(!n.RTCPeerConnection)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const l=Cs.splitSections(a.sdp);return l.shift(),l.some(c=>{const u=Cs.parseMLine(c);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},i=function(a){const l=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(l===null||l.length<2)return-1;const c=parseInt(l[1],10);return c!==c?-1:c},r=function(a){let l=65536;return e.browser==="firefox"&&(e.version<57?a===-1?l=16384:l=2147483637:e.version<60?l=e.version===57?65535:65536:l=2147483637),l},s=function(a,l){let c=65536;e.browser==="firefox"&&e.version===57&&(c=65535);const u=Cs.matchPrefix(a.sdp,"a=max-message-size:");return u.length>0?c=parseInt(u[0].substring(19),10):e.browser==="firefox"&&l!==-1&&(c=2147483637),c},o=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:l}=this.getConfiguration();l==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const l=i(arguments[0]),c=r(l),u=s(arguments[0],l);let d;c===0&&u===0?d=Number.POSITIVE_INFINITY:c===0||u===0?d=Math.max(c,u):d=Math.min(c,u);const h={};Object.defineProperty(h,"maxMessageSize",{get(){return d}}),this._sctp=h}return o.apply(this,arguments)}}function il(n){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype))return;function e(i,r){const s=i.send;i.send=function(){const a=arguments[0],l=a.length||a.size||a.byteLength;if(i.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return s.apply(i,arguments)}}const t=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const r=t.apply(this,arguments);return e(r,this),r},Or(n,"datachannel",i=>(e(i.channel,i.target),i))}function mf(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",r);s.dispatchEvent(o)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function gf(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function rl(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function sl(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const Yx=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:gf,shimAddIceCandidateNullOrEmpty:rl,shimConnectionState:mf,shimMaxMessageSize:nl,shimParameterlessSetLocalDescription:sl,shimRTCIceCandidate:tl,shimRTCIceCandidateRelayProtocol:pf,shimSendThrowTypeError:il},Symbol.toStringTag,{value:"Module"}));function qx({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Z_,i=Xx(n),r={browserDetails:i,commonShim:Yx,extractVersion:fo,disableLog:Vx,disableWarnings:Wx,sdp:$x};switch(i.browser){case"chrome":if(!np||!df||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=np,rl(n,i),sl(n),J_(n,i),ev(n),df(n,i),tv(n),sv(n,i),nv(n),iv(n),ov(n,i),tl(n),pf(n),mf(n),nl(n,i),il(n),gf(n,i);break;case"firefox":if(!ip||!hf||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=ip,rl(n,i),sl(n),av(n,i),hf(n,i),lv(n),fv(n),cv(n),uv(n),dv(n),hv(n),pv(n),mv(n),gv(n),tl(n),mf(n),nl(n,i),il(n);break;case"safari":if(!rp||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=rp,rl(n,i),sl(n),Ev(n),Tv(n),yv(n),_v(n),vv(n),Mv(n),xv(n),Cv(n),tl(n),pf(n),nl(n,i),il(n),gf(n,i);break;default:t("Unsupported browser!");break}return r}const sp=qx({window:typeof window>"u"?void 0:window});function kr(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class wv{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,o=0;for(;o<i;){const a=Math.min(i,o+this.chunkedMTU),l=e.slice(o,a),c={__peerData:this._dataCount,n:s,data:l,total:r};t.push(c),o=a,s++}return this._dataCount++,t}}}function Kx(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const kc=sp.default||sp,to=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return kc.browserDetails.browser}getVersion(){return kc.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=kc.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Zx=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),bv=()=>Math.random().toString(36).slice(2),op={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Qx extends wv{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=op,this.browser=to.getBrowser(),this.browserVersion=to.getVersion(),this.pack=Y_,this.unpack=$_,this.supports=function(){const t={browser:to.isBrowserSupported(),webRTC:to.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(op),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!to.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t}(),this.validateId=Zx,this.randomToken=bv}}const sn=new Qx,Jx="PeerJS: ";class eS{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[Jx,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var Se=new eS,bd={},tS=Object.prototype.hasOwnProperty,en="~";function Ho(){}Object.create&&(Ho.prototype=Object.create(null),new Ho().__proto__||(en=!1));function nS(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function Pv(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new nS(t,i||n,r),o=en?en+e:e;return n._events[o]?n._events[o].fn?n._events[o]=[n._events[o],s]:n._events[o].push(s):(n._events[o]=s,n._eventsCount++),n}function ol(n,e){--n._eventsCount===0?n._events=new Ho:delete n._events[e]}function qt(){this._events=new Ho,this._eventsCount=0}qt.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)tS.call(t,i)&&e.push(en?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};qt.prototype.listeners=function(e){var t=en?en+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=new Array(s);r<s;r++)o[r]=i[r].fn;return o};qt.prototype.listenerCount=function(e){var t=en?en+e:e,i=this._events[t];return i?i.fn?1:i.length:0};qt.prototype.emit=function(e,t,i,r,s,o){var a=en?en+e:e;if(!this._events[a])return!1;var l=this._events[a],c=arguments.length,u,d;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,i),!0;case 4:return l.fn.call(l.context,t,i,r),!0;case 5:return l.fn.call(l.context,t,i,r,s),!0;case 6:return l.fn.call(l.context,t,i,r,s,o),!0}for(d=1,u=new Array(c-1);d<c;d++)u[d-1]=arguments[d];l.fn.apply(l.context,u)}else{var h=l.length,p;for(d=0;d<h;d++)switch(l[d].once&&this.removeListener(e,l[d].fn,void 0,!0),c){case 1:l[d].fn.call(l[d].context);break;case 2:l[d].fn.call(l[d].context,t);break;case 3:l[d].fn.call(l[d].context,t,i);break;case 4:l[d].fn.call(l[d].context,t,i,r);break;default:if(!u)for(p=1,u=new Array(c-1);p<c;p++)u[p-1]=arguments[p];l[d].fn.apply(l[d].context,u)}}return!0};qt.prototype.on=function(e,t,i){return Pv(this,e,t,i,!1)};qt.prototype.once=function(e,t,i){return Pv(this,e,t,i,!0)};qt.prototype.removeListener=function(e,t,i,r){var s=en?en+e:e;if(!this._events[s])return this;if(!t)return ol(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!r||o.once)&&(!i||o.context===i)&&ol(this,s);else{for(var a=0,l=[],c=o.length;a<c;a++)(o[a].fn!==t||r&&!o[a].once||i&&o[a].context!==i)&&l.push(o[a]);l.length?this._events[s]=l.length===1?l[0]:l:ol(this,s)}return this};qt.prototype.removeAllListeners=function(e){var t;return e?(t=en?en+e:e,this._events[t]&&ol(this,t)):(this._events=new Ho,this._eventsCount=0),this};qt.prototype.off=qt.prototype.removeListener;qt.prototype.addListener=qt.prototype.on;qt.prefixed=en;qt.EventEmitter=qt;bd=qt;var Fr={};kr(Fr,"ConnectionType",()=>$i);kr(Fr,"PeerErrorType",()=>Et);kr(Fr,"BaseConnectionErrorType",()=>_f);kr(Fr,"DataConnectionErrorType",()=>Pd);kr(Fr,"SerializationType",()=>tc);kr(Fr,"SocketEventType",()=>Oi);kr(Fr,"ServerMessageType",()=>Xt);var $i=function(n){return n.Data="data",n.Media="media",n}({}),Et=function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n}({}),_f=function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n}({}),Pd=function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n}({}),tc=function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n}({}),Oi=function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n}({}),Xt=function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n}({});const Lv="1.5.5";class iS extends bd.EventEmitter{constructor(e,t,i,r,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+Lv),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),Se.log("Server message received:",s)}catch{Se.log("Invalid server message",r.data);return}this.emit(Oi.Message,s)},this._socket.onclose=r=>{this._disconnected||(Se.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(Oi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Se.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Se.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Xt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Oi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Dv{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===$i.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Se.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;Se.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Se.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:Xt.Candidate,payload:{candidate:o.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Se.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(_f.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Se.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(_f.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Se.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Se.log("Listening for data channel"),e.ondatachannel=o=>{Se.log("Received data channel");const a=o.channel;s.getConnection(t,i)._initializeDataChannel(a)},Se.log("Listening for remote stream"),e.ontrack=o=>{Se.log("Received remote stream");const a=o.streams[0],l=s.getConnection(t,i);if(l.type===$i.Media){const c=l;this._addStreamToMediaConnection(a,c)}}}cleanup(){Se.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);Se.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Se.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===$i.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Xt.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Et.WebRTC,r),Se.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(Et.WebRTC,i),Se.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();Se.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Se.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:Xt.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(Et.WebRTC,r),Se.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(Et.WebRTC,i),Se.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;Se.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),Se.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){r.emitError(Et.WebRTC,o),Se.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Se.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Se.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Et.WebRTC,t),Se.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Se.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Se.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){Se.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Iv extends bd.EventEmitter{emitError(e,t){Se.error("Error:",t),this.emit("error",new rS(`${e}`,t))}}class rS extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Uv extends Iv{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var Pf;const Mo=class Mo extends Uv{get type(){return $i.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Mo.ID_PREFIX+sn.randomToken(),this._negotiator=new Dv(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Se.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Se.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Se.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case Xt.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case Xt.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:Se.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Se.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Pf=new WeakMap,js(Mo,Pf,Mo.ID_PREFIX="mc_");let Dl=Mo;class sS{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:o}=this._options,a=new URL(`${t}://${i}:${r}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Lv),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Se.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==sn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===sn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Se.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Lf,Df;const vr=class vr extends Uv{get type(){return $i.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||vr.ID_PREFIX+bv(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Dv(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Se.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Se.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Se.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Pd.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Xt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Xt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Se.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Lf=new WeakMap,Df=new WeakMap,js(vr,Lf,vr.ID_PREFIX="dc_"),js(vr,Df,vr.MAX_BUFFERED_AMOUNT=8388608);let Il=vr;class Ld extends Il{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Il.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Se.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Fc extends Ld{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new wv,this.serialization=tc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=$_(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=Kx(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=Y_(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Se.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class oS extends Ld{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=tc.None}}class aS extends Ld{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=sn.chunkedMTU){this.emitError(Pd.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=tc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var If;const To=class To extends Iv{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:oS,json:aS,binary:Fc,"binary-utf8":Fc,default:Fc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:sn.CLOUD_HOST,port:sn.CLOUD_PORT,path:"/",key:To.DEFAULT_KEY,token:sn.randomToken(),config:sn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==sn.CLOUD_HOST?this._options.secure=sn.isSecure():this._options.host==sn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Se.setLogFunction(this._options.logFunction),Se.logLevel=this._options.debug||0,this._api=new sS(t),this._socket=this._createServerConnection(),!sn.supports.audioVideo&&!sn.supports.data){this._delayedAbort(Et.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!sn.validateId(i)){this._delayedAbort(Et.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(Et.ServerError,r))}_createServerConnection(){const e=new iS(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Oi.Message,t=>{this._handleMessage(t)}),e.on(Oi.Error,t=>{this._abort(Et.SocketError,t)}),e.on(Oi.Disconnected,()=>{this.disconnected||(this.emitError(Et.Network,"Lost connection to server."),this.disconnect())}),e.on(Oi.Close,()=>{this.disconnected||this._abort(Et.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case Xt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Xt.Error:this._abort(Et.ServerError,i.msg);break;case Xt.IdTaken:this._abort(Et.UnavailableID,`ID "${this.id}" is taken`);break;case Xt.InvalidKey:this._abort(Et.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Xt.Leave:Se.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Xt.Expire:this.emitError(Et.PeerUnavailable,`Could not connect to peer ${r}`);break;case Xt.Offer:{const s=i.connectionId;let o=this.getConnection(r,s);if(o&&(o.close(),Se.warn(`Offer received for existing Connection ID:${s}`)),i.type===$i.Media){const l=new Dl(r,this,{connectionId:s,_payload:i,metadata:i.metadata});o=l,this._addConnection(r,o),this.emit("call",l)}else if(i.type===$i.Data){const l=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});o=l,this._addConnection(r,o),this.emit("connection",l)}else{Se.warn(`Received malformed connection type:${i.type}`);return}const a=this._getMessages(s);for(const l of a)o.handleMessage(l);break}default:{if(!i){Se.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,o=this.getConnection(r,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):Se.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Se.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Et.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){Se.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Et.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Se.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new Dl(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){Se.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Se.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Se.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;Se.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Se.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Se.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Et.ServerError,t))}};If=new WeakMap,js(To,If,To.DEFAULT_KEY="peerjs");let vf=To;var ap=vf;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="160",lS=0,lp=1,cS=2,Nv=1,uS=2,li=3,er=0,hn=1,fi=2,Yi=0,Rs=1,cp=2,up=3,fp=4,fS=5,gr=100,dS=101,hS=102,dp=103,hp=104,pS=200,mS=201,gS=202,_S=203,yf=204,xf=205,vS=206,yS=207,xS=208,SS=209,ES=210,MS=211,TS=212,CS=213,RS=214,AS=0,wS=1,bS=2,Ul=3,PS=4,LS=5,DS=6,IS=7,Ov=0,US=1,NS=2,qi=0,OS=1,kS=2,FS=3,zS=4,BS=5,GS=6,kv=300,Ns=301,Os=302,Sf=303,Ef=304,nc=306,Mf=1e3,Wn=1001,Tf=1002,Qt=1003,pp=1004,zc=1005,bn=1006,HS=1007,Vo=1008,Ki=1009,VS=1010,WS=1011,Id=1012,Fv=1013,ki=1014,Fi=1015,Wo=1016,zv=1017,Bv=1018,Tr=1020,XS=1021,Xn=1023,jS=1024,$S=1025,Cr=1026,ks=1027,YS=1028,Gv=1029,qS=1030,Hv=1031,Vv=1033,Bc=33776,Gc=33777,Hc=33778,Vc=33779,mp=35840,gp=35841,_p=35842,vp=35843,Wv=36196,yp=37492,xp=37496,Sp=37808,Ep=37809,Mp=37810,Tp=37811,Cp=37812,Rp=37813,Ap=37814,wp=37815,bp=37816,Pp=37817,Lp=37818,Dp=37819,Ip=37820,Up=37821,Wc=36492,Np=36494,Op=36495,KS=36283,kp=36284,Fp=36285,zp=36286,Xv=3e3,Rr=3001,ZS=3200,QS=3201,jv=0,JS=1,Ln="",kt="srgb",Si="srgb-linear",Ud="display-p3",ic="display-p3-linear",Nl="linear",ft="srgb",Ol="rec709",kl="p3",Hr=7680,Bp=519,eE=512,tE=513,nE=514,$v=515,iE=516,rE=517,sE=518,oE=519,Gp=35044,Hp="300 es",Cf=1035,pi=2e3,Fl=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Rf=180/Math.PI;function Ko(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function aE(n,e){return(n%e+e)%e}function jc(n,e,t){return(1-t)*n+t*e}function Vp(n){return(n&n-1)===0&&n!==0}function Af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function no(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],y=i[8],v=r[0],m=r[3],f=r[6],g=r[1],_=r[4],S=r[7],L=r[2],P=r[5],b=r[8];return s[0]=o*v+a*g+l*L,s[3]=o*m+a*_+l*P,s[6]=o*f+a*S+l*b,s[1]=c*v+u*g+d*L,s[4]=c*m+u*_+d*P,s[7]=c*f+u*S+d*b,s[2]=h*v+p*g+y*L,s[5]=h*m+p*_+y*P,s[8]=h*f+p*S+y*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,y=t*d+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new We;function Yv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lE(){const n=zl("canvas");return n.style.display="block",n}const Wp={};function Eo(n){n in Wp||(Wp[n]=!0,console.warn(n))}const Xp=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jp=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[Si]:{transfer:Nl,primaries:Ol,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:ft,primaries:Ol,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ic]:{transfer:Nl,primaries:kl,toReference:n=>n.applyMatrix3(jp),fromReference:n=>n.applyMatrix3(Xp)},[Ud]:{transfer:ft,primaries:kl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(jp),fromReference:n=>n.applyMatrix3(Xp).convertLinearToSRGB()}},cE=new Set([Si,ic]),st={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xa[e].toReference,r=xa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xa[n].primaries},getTransfer:function(n){return n===Ln?Nl:xa[n].transfer}};function As(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vr;class qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=zl("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uE=0;class Kv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Ko(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fE=0;class pn extends Hs{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,i=Wn,r=Wn,s=bn,o=Vo,a=Xn,l=Ki,c=pn.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Ko(),this.name="",this.source=new Kv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Rr?kt:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mf:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mf:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Rr:Xv}set encoding(e){Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rr?kt:Ln}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=kv;pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],y=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(p+1)/2,L=(f+1)/2,P=(u+h)/4,b=(d+v)/4,k=(y+m)/4;return _>S&&_>L?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=P/i,s=b/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=k/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=b/s,r=k/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-y)*(m-y)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(d-v)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dE extends Hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rr?kt:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends dE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zv extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hE extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=y,e[t+3]=v;return}if(d!==v||l!==h||c!==p||u!==y){let m=1-a;const f=l*h+c*p+u*y+d*v,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const L=Math.sqrt(_),P=Math.atan2(L,f*g);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const S=a*g;if(l=l*m+h*S,c=c*m+p*S,u=u*m+y*S,d=d*m+v*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],y=s[o+3];return e[t]=a*y+u*d+l*p-c*h,e[t+1]=l*y+u*h+c*d-a*p,e[t+2]=c*y+u*p+a*h-l*d,e[t+3]=u*y-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"YXZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"ZXY":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"ZYX":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"YZX":this._x=h*u*d+c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d-h*p*y;break;case"XZY":this._x=h*u*d-c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new F,$p=new Zi;class Zo{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ea.subVectors(this.max,io),Wr.subVectors(e.a,io),Xr.subVectors(e.b,io),jr.subVectors(e.c,io),Ci.subVectors(Xr,Wr),Ri.subVectors(jr,Xr),ar.subVectors(Wr,jr);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-ar.z,ar.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,ar.z,0,-ar.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-ar.y,ar.x,0];return!Zc(t,Wr,Xr,jr,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,Wr,Xr,jr,Ea))?!1:(Ma.crossVectors(Ci,Ri),t=[Ma.x,Ma.y,Ma.z],Zc(t,Wr,Xr,jr,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new F,new F,new F,new F,new F,new F,new F,new F],kn=new F,Sa=new Zo,Wr=new F,Xr=new F,jr=new F,Ci=new F,Ri=new F,ar=new F,io=new F,Ea=new F,Ma=new F,lr=new F;function Zc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){lr.fromArray(n,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=t.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pE=new Zo,ro=new F,Qc=new F;class Nd{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Qc)),this.expandByPoint(ro.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new F,Jc=new F,Ta=new F,Ai=new F,eu=new F,Ca=new F,tu=new F;class Qv{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Jc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ta),a=Ai.dot(this.direction),l=-Ai.dot(Ta),c=Ai.lengthSq(),u=Math.abs(1-o*o);let d,h,p,y;if(u>0)if(d=o*l-a,h=o*a-l,y=s*u,d>=0)if(h>=-y)if(h<=y){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jc).addScaledVector(Ta,h),p}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){eu.subVectors(t,e),Ca.subVectors(i,e),tu.crossVectors(eu,Ca);let o=this.direction.dot(tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(Ca.crossVectors(Ai,Ca));if(l<0)return null;const c=a*this.direction.dot(eu.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(tu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,o,a,l,c,u,d,h,p,y,v,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,p,y,v,m)}set(e,t,i,r,s,o,a,l,c,u,d,h,p,y,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=y,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,y=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+y*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=y+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,y=c*u,v=c*d;t[0]=h+v*a,t[4]=y*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-y,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,y=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=y+p*a,t[1]=p+y*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,y=a*u,v=a*d;t[0]=l*u,t[4]=y*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,y=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=y*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+y,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*c,y=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=p*d-y,t[2]=y*d-p,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mE,e,gE)}lookAt(e,t,i){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),wi.crossVectors(i,mn),wi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),wi.crossVectors(i,mn)),wi.normalize(),Ra.crossVectors(mn,wi),r[0]=wi.x,r[4]=Ra.x,r[8]=mn.x,r[1]=wi.y,r[5]=Ra.y,r[9]=mn.y,r[2]=wi.z,r[6]=Ra.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],y=i[2],v=i[6],m=i[10],f=i[14],g=i[3],_=i[7],S=i[11],L=i[15],P=r[0],b=r[4],k=r[8],T=r[12],C=r[1],V=r[5],j=r[9],J=r[13],I=r[2],z=r[6],$=r[10],K=r[14],U=r[3],B=r[7],W=r[11],Y=r[15];return s[0]=o*P+a*C+l*I+c*U,s[4]=o*b+a*V+l*z+c*B,s[8]=o*k+a*j+l*$+c*W,s[12]=o*T+a*J+l*K+c*Y,s[1]=u*P+d*C+h*I+p*U,s[5]=u*b+d*V+h*z+p*B,s[9]=u*k+d*j+h*$+p*W,s[13]=u*T+d*J+h*K+p*Y,s[2]=y*P+v*C+m*I+f*U,s[6]=y*b+v*V+m*z+f*B,s[10]=y*k+v*j+m*$+f*W,s[14]=y*T+v*J+m*K+f*Y,s[3]=g*P+_*C+S*I+L*U,s[7]=g*b+_*V+S*z+L*B,s[11]=g*k+_*j+S*$+L*W,s[15]=g*T+_*J+S*K+L*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],y=e[3],v=e[7],m=e[11],f=e[15];return y*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],y=e[12],v=e[13],m=e[14],f=e[15],g=d*m*c-v*h*c+v*l*p-a*m*p-d*l*f+a*h*f,_=y*h*c-u*m*c-y*l*p+o*m*p+u*l*f-o*h*f,S=u*v*c-y*d*c+y*a*p-o*v*p-u*a*f+o*d*f,L=y*d*l-u*v*l-y*a*h+o*v*h+u*a*m-o*d*m,P=t*g+i*_+r*S+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return e[0]=g*b,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*b,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*f+i*l*f)*b,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*b,e[4]=_*b,e[5]=(u*m*s-y*h*s+y*r*p-t*m*p-u*r*f+t*h*f)*b,e[6]=(y*l*s-o*m*s-y*r*c+t*m*c+o*r*f-t*l*f)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*b,e[8]=S*b,e[9]=(y*d*s-u*v*s-y*i*p+t*v*p+u*i*f-t*d*f)*b,e[10]=(o*v*s-y*a*s+y*i*c-t*v*c-o*i*f+t*a*f)*b,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*b,e[12]=L*b,e[13]=(u*v*r-y*d*r+y*i*h-t*v*h-u*i*m+t*d*m)*b,e[14]=(y*a*r-o*v*r-y*i*l+t*v*l+o*i*m-t*a*m)*b,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,y=s*d,v=o*u,m=o*d,f=a*d,g=l*c,_=l*u,S=l*d,L=i.x,P=i.y,b=i.z;return r[0]=(1-(v+f))*L,r[1]=(p+S)*L,r[2]=(y-_)*L,r[3]=0,r[4]=(p-S)*P,r[5]=(1-(h+f))*P,r[6]=(m+g)*P,r[7]=0,r[8]=(y+_)*b,r[9]=(m-g)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,u=1/o,d=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,t.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=pi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,y;if(a===pi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Fl)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,p=(i+r)*u;let y,v;if(a===pi)y=(o+s)*d,v=-2*d;else if(a===Fl)y=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $r=new F,Fn=new Rt,mE=new F(0,0,0),gE=new F(1,1,1),wi=new F,Ra=new F,mn=new F,Yp=new Rt,qp=new Zi;class rc{constructor(e=0,t=0,i=0,r=rc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rc.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _E=0;const Kp=new F,Yr=new Zi,si=new Rt,Aa=new F,so=new F,vE=new F,yE=new Zi,Zp=new F(1,0,0),Qp=new F(0,1,0),Jp=new F(0,0,1),xE={type:"added"},SE={type:"removed"};class $t extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new F,t=new rc,i=new Zi,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new We}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,t){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Aa.copy(e):Aa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(so,Aa,this.up):si.lookAt(Aa,so,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(si),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,vE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,yE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new F(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new F,oi=new F,nu=new F,ai=new F,qr=new F,Kr=new F,em=new F,iu=new F,ru=new F,su=new F;let wa=!1;class Vn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),oi.subVectors(i,t),nu.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(oi),l=zn.dot(nu),c=oi.dot(oi),u=oi.dot(nu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,y=(o*u-a*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,i,r,s,o,a,l){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),oi.subVectors(e,t),zn.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),zn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Kr.subVectors(s,i),iu.subVectors(e,i);const l=qr.dot(iu),c=Kr.dot(iu);if(l<=0&&c<=0)return t.copy(i);ru.subVectors(e,r);const u=qr.dot(ru),d=Kr.dot(ru);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qr,o);su.subVectors(e,s);const p=qr.dot(su),y=Kr.dot(su);if(y>=0&&p<=y)return t.copy(s);const v=p*c-l*y;if(v<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector(Kr,a);const m=u*y-p*d;if(m<=0&&d-u>=0&&p-y>=0)return em.subVectors(s,r),a=(d-u)/(d-u+(p-y)),t.copy(r).addScaledVector(em,a);const f=1/(m+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(qr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=aE(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ou(o,s,e+1/3),this.g=ou(o,s,e),this.b=ou(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Jv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Yc(e.r),this.g=Yc(e.g),this.b=Yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return st.fromWorkingColorSpace(Wt.copy(this),e),Math.round(an(Wt.r*255,0,255))*65536+Math.round(an(Wt.g*255,0,255))*256+Math.round(an(Wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=kt){st.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ba);const i=jc(bi.h,ba.h,t),r=jc(bi.s,ba.s,t),s=jc(bi.l,ba.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Je;Je.NAMES=Jv;let EE=0;class Qo extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Rs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=xf,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==xf&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ul&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class e0 extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new F,Pa=new Ye;class ni{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=no(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}}class t0 extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class n0 extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xn extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ME=0;const Rn=new Rt,au=new $t,Zr=new F,gn=new Zo,oo=new Zo,bt=new F;class Mi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?n0:t0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(gn.min,oo.min),gn.expandByPoint(bt),bt.addVectors(gn.max,oo.max),gn.expandByPoint(bt)):(gn.expandByPoint(oo.min),gn.expandByPoint(oo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),bt.add(Zr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new F,u[C]=new F;const d=new F,h=new F,p=new F,y=new Ye,v=new Ye,m=new Ye,f=new F,g=new F;function _(C,V,j){d.fromArray(r,C*3),h.fromArray(r,V*3),p.fromArray(r,j*3),y.fromArray(o,C*2),v.fromArray(o,V*2),m.fromArray(o,j*2),h.sub(d),p.sub(d),v.sub(y),m.sub(y);const J=1/(v.x*m.y-m.x*v.y);isFinite(J)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(J),g.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(J),c[C].add(f),c[V].add(f),c[j].add(f),u[C].add(g),u[V].add(g),u[j].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let C=0,V=S.length;C<V;++C){const j=S[C],J=j.start,I=j.count;for(let z=J,$=J+I;z<$;z+=3)_(i[z+0],i[z+1],i[z+2])}const L=new F,P=new F,b=new F,k=new F;function T(C){b.fromArray(s,C*3),k.copy(b);const V=c[C];L.copy(V),L.sub(b.multiplyScalar(b.dot(V))).normalize(),P.crossVectors(k,V);const J=P.dot(u[C])<0?-1:1;l[C*4]=L.x,l[C*4+1]=L.y,l[C*4+2]=L.z,l[C*4+3]=J}for(let C=0,V=S.length;C<V;++C){const j=S[C],J=j.start,I=j.count;for(let z=J,$=J+I;z<$;z+=3)T(i[z+0]),T(i[z+1]),T(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)h[y++]=c[p++]}return new ni(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tm=new Rt,cr=new Qv,La=new Nd,nm=new F,Qr=new F,Jr=new F,es=new F,lu=new F,Da=new F,Ia=new Ye,Ua=new Ye,Na=new Ye,im=new F,rm=new F,sm=new F,Oa=new F,ka=new F;class ln extends $t{constructor(e=new Mi,t=new e0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(lu.fromBufferAttribute(d,e),o?Da.addScaledVector(lu,u):Da.addScaledVector(lu.sub(t),u))}t.add(Da)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(La.containsPoint(cr.origin)===!1&&(cr.intersectSphere(La,nm)===null||cr.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(s).invert(),cr.copy(e.ray).applyMatrix4(tm),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const m=h[y],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,L=_;S<L;S+=3){const P=a.getX(S),b=a.getX(S+1),k=a.getX(S+2);r=Fa(this,f,e,i,c,u,d,P,b,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=y,f=v;m<f;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Fa(this,o,e,i,c,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=h.length;y<v;y++){const m=h[y],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,L=_;S<L;S+=3){const P=S,b=S+1,k=S+2;r=Fa(this,f,e,i,c,u,d,P,b,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,f=v;m<f;m+=3){const g=m,_=m+1,S=m+2;r=Fa(this,o,e,i,c,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function TE(n,e,t,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===er,a),l===null)return null;ka.copy(a),ka.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:n}}function Fa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Qr),n.getVertexPosition(l,Jr),n.getVertexPosition(c,es);const u=TE(n,e,t,i,Qr,Jr,es,Oa);if(u){r&&(Ia.fromBufferAttribute(r,a),Ua.fromBufferAttribute(r,l),Na.fromBufferAttribute(r,c),u.uv=Vn.getInterpolation(Oa,Qr,Jr,es,Ia,Ua,Na,new Ye)),s&&(Ia.fromBufferAttribute(s,a),Ua.fromBufferAttribute(s,l),Na.fromBufferAttribute(s,c),u.uv1=Vn.getInterpolation(Oa,Qr,Jr,es,Ia,Ua,Na,new Ye),u.uv2=u.uv1),o&&(im.fromBufferAttribute(o,a),rm.fromBufferAttribute(o,l),sm.fromBufferAttribute(o,c),u.normal=Vn.getInterpolation(Oa,Qr,Jr,es,im,rm,sm,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};Vn.getNormal(Qr,Jr,es,d.normal),u.face=d}return u}class mi extends Mi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(d,2));function y(v,m,f,g,_,S,L,P,b,k,T){const C=S/b,V=L/k,j=S/2,J=L/2,I=P/2,z=b+1,$=k+1;let K=0,U=0;const B=new F;for(let W=0;W<$;W++){const Y=W*V-J;for(let Q=0;Q<z;Q++){const X=Q*C-j;B[v]=X*g,B[m]=Y*_,B[f]=I,c.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[f]=P>0?1:-1,u.push(B.x,B.y,B.z),d.push(Q/b),d.push(1-W/k),K+=1}}for(let W=0;W<k;W++)for(let Y=0;Y<b;Y++){const Q=h+Y+z*W,X=h+Y+z*(W+1),Z=h+(Y+1)+z*(W+1),ce=h+(Y+1)+z*W;l.push(Q,X,ce),l.push(X,Z,ce),U+=6}a.addGroup(p,U,T),p+=U,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const r in i)e[r]=i[r]}return e}function CE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function i0(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const RE={clone:Fs,merge:Kt};var AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ir extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=wE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=CE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class r0 extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends r0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class bE extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ts,ns,e,t);r.layers=this.layers,this.add(r);const s=new Pn(ts,ns,e,t);s.layers=this.layers,this.add(s);const o=new Pn(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new Pn(ts,ns,e,t);a.layers=this.layers,this.add(a);const l=new Pn(ts,ns,e,t);l.layers=this.layers,this.add(l);const c=new Pn(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class s0 extends pn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PE extends Dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Rr?kt:Ln),this.texture=new s0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mi(5,5,5),s=new Ir({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Yi});s.uniforms.tEquirect.value=t;const o=new ln(r,s),a=t.minFilter;return t.minFilter===Vo&&(t.minFilter=bn),new bE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const cu=new F,LE=new F,DE=new We;class pr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cu.subVectors(i,t).cross(LE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||DE.getNormalMatrix(e),r=this.coplanarPoint(cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Nd,za=new F;class kd{constructor(e=new pr,t=new pr,i=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],y=r[9],v=r[10],m=r[11],f=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-f).normalize(),i[1].setComponents(l+s,h+c,m+p,S+f).normalize(),i[2].setComponents(l+o,h+u,m+y,S+g).normalize(),i[3].setComponents(l-o,h-u,m-y,S-g).normalize(),i[4].setComponents(l-a,h-d,m-v,S-_).normalize(),t===pi)i[5].setComponents(l+a,h+d,m+v,S+_).normalize();else if(t===Fl)i[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function IE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=d.byteLength,y=n.createBuffer();n.bindBuffer(u,y),n.bufferData(u,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const h=u.array,p=u._updateRange,y=u.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&y.length===0&&n.bufferSubData(d,0,h),y.length!==0){for(let v=0,m=y.length;v<m;v++){const f=y[v];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class Fd extends Mi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],y=[],v=[],m=[];for(let f=0;f<u;f++){const g=f*h-o;for(let _=0;_<c;_++){const S=_*d-s;y.push(S,-g,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,S=g+c*(f+1),L=g+1+c*(f+1),P=g+1+c*f;p.push(_,S,P),p.push(S,L,P)}this.setIndex(p),this.setAttribute("position",new xn(y,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.width,e.height,e.widthSegments,e.heightSegments)}}var UE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$E=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,iM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_T=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ST=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ET=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:UE,alphahash_pars_fragment:NE,alphamap_fragment:OE,alphamap_pars_fragment:kE,alphatest_fragment:FE,alphatest_pars_fragment:zE,aomap_fragment:BE,aomap_pars_fragment:GE,batching_pars_vertex:HE,batching_vertex:VE,begin_vertex:WE,beginnormal_vertex:XE,bsdfs:jE,iridescence_fragment:$E,bumpmap_pars_fragment:YE,clipping_planes_fragment:qE,clipping_planes_pars_fragment:KE,clipping_planes_pars_vertex:ZE,clipping_planes_vertex:QE,color_fragment:JE,color_pars_fragment:eM,color_pars_vertex:tM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:aM,emissivemap_fragment:lM,emissivemap_pars_fragment:cM,colorspace_fragment:uM,colorspace_pars_fragment:fM,envmap_fragment:dM,envmap_common_pars_fragment:hM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:_M,fog_pars_vertex:vM,fog_fragment:yM,fog_pars_fragment:xM,gradientmap_pars_fragment:SM,lightmap_fragment:EM,lightmap_pars_fragment:MM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:CM,lights_pars_begin:RM,lights_toon_fragment:wM,lights_toon_pars_fragment:bM,lights_phong_fragment:PM,lights_phong_pars_fragment:LM,lights_physical_fragment:DM,lights_physical_pars_fragment:IM,lights_fragment_begin:UM,lights_fragment_maps:NM,lights_fragment_end:OM,logdepthbuf_fragment:kM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:BM,map_fragment:GM,map_pars_fragment:HM,map_particle_fragment:VM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:jM,morphcolor_vertex:$M,morphnormal_vertex:YM,morphtarget_pars_vertex:qM,morphtarget_vertex:KM,normal_fragment_begin:ZM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:eT,normal_vertex:tT,normalmap_pars_fragment:nT,clearcoat_normal_fragment_begin:iT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:sT,iridescence_pars_fragment:oT,opaque_fragment:aT,packing:lT,premultiplied_alpha_fragment:cT,project_vertex:uT,dithering_fragment:fT,dithering_pars_fragment:dT,roughnessmap_fragment:hT,roughnessmap_pars_fragment:pT,shadowmap_pars_fragment:mT,shadowmap_pars_vertex:gT,shadowmap_vertex:_T,shadowmask_pars_fragment:vT,skinbase_vertex:yT,skinning_pars_vertex:xT,skinning_vertex:ST,skinnormal_vertex:ET,specularmap_fragment:MT,specularmap_pars_fragment:TT,tonemapping_fragment:CT,tonemapping_pars_fragment:RT,transmission_fragment:AT,transmission_pars_fragment:wT,uv_pars_fragment:bT,uv_pars_vertex:PT,uv_vertex:LT,worldpos_vertex:DT,background_vert:IT,background_frag:UT,backgroundCube_vert:NT,backgroundCube_frag:OT,cube_vert:kT,cube_frag:FT,depth_vert:zT,depth_frag:BT,distanceRGBA_vert:GT,distanceRGBA_frag:HT,equirect_vert:VT,equirect_frag:WT,linedashed_vert:XT,linedashed_frag:jT,meshbasic_vert:$T,meshbasic_frag:YT,meshlambert_vert:qT,meshlambert_frag:KT,meshmatcap_vert:ZT,meshmatcap_frag:QT,meshnormal_vert:JT,meshnormal_frag:eC,meshphong_vert:tC,meshphong_frag:nC,meshphysical_vert:iC,meshphysical_frag:rC,meshtoon_vert:sC,meshtoon_frag:oC,points_vert:aC,points_frag:lC,shadow_vert:cC,shadow_frag:uC,sprite_vert:fC,sprite_frag:dC},ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Qn={basic:{uniforms:Kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Kt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Kt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Kt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Kt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Kt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Kt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Kt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Kt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Kt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Kt([ae.lights,ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Qn.physical={uniforms:Kt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ba={r:0,b:0,g:0};function hC(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function y(m,f){let g=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),g=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===nc)?(u===void 0&&(u=new ln(new mi(1,1,1),new Ir({name:"BackgroundCubeMaterial",uniforms:Fs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=st.getTransfer(_.colorSpace)!==ft,(d!==_||h!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ln(new Fd(2,2),new Ir({name:"BackgroundMaterial",uniforms:Fs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=st.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Ba,i0(n)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:y}}function pC(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(I,z,$,K,U){let B=!1;if(o){const W=v(K,$,z);c!==W&&(c=W,p(c.object)),B=f(I,K,$,U),B&&g(I,K,$,U)}else{const W=z.wireframe===!0;(c.geometry!==K.id||c.program!==$.id||c.wireframe!==W)&&(c.geometry=K.id,c.program=$.id,c.wireframe=W,B=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,k(I,z,$,K),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function y(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,z,$){const K=$.wireframe===!0;let U=a[I.id];U===void 0&&(U={},a[I.id]=U);let B=U[z.id];B===void 0&&(B={},U[z.id]=B);let W=B[K];return W===void 0&&(W=m(h()),B[K]=W),W}function m(I){const z=[],$=[],K=[];for(let U=0;U<r;U++)z[U]=0,$[U]=0,K[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:K,object:I,attributes:{},index:null}}function f(I,z,$,K){const U=c.attributes,B=z.attributes;let W=0;const Y=$.getAttributes();for(const Q in Y)if(Y[Q].location>=0){const Z=U[Q];let ce=B[Q];if(ce===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;W++}return c.attributesNum!==W||c.index!==K}function g(I,z,$,K){const U={},B=z.attributes;let W=0;const Y=$.getAttributes();for(const Q in Y)if(Y[Q].location>=0){let Z=B[Q];Z===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),U[Q]=ce,W++}c.attributes=U,c.attributesNum=W,c.index=K}function _(){const I=c.newAttributes;for(let z=0,$=I.length;z<$;z++)I[z]=0}function S(I){L(I,0)}function L(I,z){const $=c.newAttributes,K=c.enabledAttributes,U=c.attributeDivisors;$[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),U[I]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),U[I]=z)}function P(){const I=c.newAttributes,z=c.enabledAttributes;for(let $=0,K=z.length;$<K;$++)z[$]!==I[$]&&(n.disableVertexAttribArray($),z[$]=0)}function b(I,z,$,K,U,B,W){W===!0?n.vertexAttribIPointer(I,z,$,U,B):n.vertexAttribPointer(I,z,$,K,U,B)}function k(I,z,$,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const U=K.attributes,B=$.getAttributes(),W=z.defaultAttributeValues;for(const Y in B){const Q=B[Y];if(Q.location>=0){let X=U[Y];if(X===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const Z=X.normalized,ce=X.itemSize,ye=t.get(X);if(ye===void 0)continue;const Ee=ye.buffer,De=ye.type,Ne=ye.bytesPerElement,we=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||X.gpuType===Fv);if(X.isInterleavedBufferAttribute){const ze=X.data,G=ze.stride,It=X.offset;if(ze.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)L(Q.location+Re,ze.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Re=0;Re<Q.locationSize;Re++)S(Q.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Re=0;Re<Q.locationSize;Re++)b(Q.location+Re,ce/Q.locationSize,De,Z,G*Ne,(It+ce/Q.locationSize*Re)*Ne,we)}else{if(X.isInstancedBufferAttribute){for(let ze=0;ze<Q.locationSize;ze++)L(Q.location+ze,X.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ze=0;ze<Q.locationSize;ze++)S(Q.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ze=0;ze<Q.locationSize;ze++)b(Q.location+ze,ce/Q.locationSize,De,Z,ce*Ne,ce/Q.locationSize*ze*Ne,we)}}else if(W!==void 0){const Z=W[Y];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Q.location,Z);break;case 3:n.vertexAttrib3fv(Q.location,Z);break;case 4:n.vertexAttrib4fv(Q.location,Z);break;default:n.vertexAttrib1fv(Q.location,Z)}}}}P()}function T(){j();for(const I in a){const z=a[I];for(const $ in z){const K=z[$];for(const U in K)y(K[U].object),delete K[U];delete z[$]}delete a[I]}}function C(I){if(a[I.id]===void 0)return;const z=a[I.id];for(const $ in z){const K=z[$];for(const U in K)y(K[U].object),delete K[U];delete z[$]}delete a[I.id]}function V(I){for(const z in a){const $=a[z];if($[I.id]===void 0)continue;const K=$[I.id];for(const U in K)y(K[U].object),delete K[U];delete $[I.id]}}function j(){J(),u=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:J,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:S,disableUnusedAttributes:P}}function mC(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,h){if(h===0)return;let p,y;if(r)p=n,y="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[y](s,u,d,h),t.update(d,s,h)}function c(u,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<h;y++)this.render(u[y],d[y]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,h);let y=0;for(let v=0;v<h;v++)y+=d[v];t.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function gC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,S=o||e.has("OES_texture_float"),L=_&&S,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:P}}function _C(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new pr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||y===null||y.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let S=f.clippingState||null;l.value=S,S=u(y,h,_,p);for(let L=0;L!==_;++L)S[L]=t[L];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,y){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const f=p+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,S=p;_!==v;++_,S+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function vC(n){let e=new WeakMap;function t(o,a){return a===Sf?o.mapping=Ns:a===Ef&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sf||a===Ef)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new PE(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class a0 extends r0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,om=[.125,.215,.35,.446,.526,.582],_r=20,uu=new a0,am=new Je;let fu=null,du=0,hu=0;const mr=(1+Math.sqrt(5))/2,is=1/mr,lm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,mr,is),new F(0,mr,-is),new F(is,0,mr),new F(-is,0,mr),new F(mr,is,0),new F(-mr,is,0)];class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,du,hu),e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Wo,format:Xn,colorSpace:Si,depthBuffer:!1},r=um(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yC(s)),this._blurMaterial=xC(s,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,i,r){const a=new Pn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(am),u.toneMapping=qi,u.autoClear=!1;const p=new e0({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),y=new ln(new mi,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(am),v=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Ga(r,g*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ns||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ga(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lm[(r-1)%lm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ln(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),v=s/y,m=isFinite(s)?1+Math.floor(u*v):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const f=[];let g=0;for(let b=0;b<_r;++b){const k=b/v,T=Math.exp(-k*k/2);f.push(T),b===0?g+=T:b<m&&(g+=2*T)}for(let b=0;b<f.length;b++)f[b]=f[b]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const S=this._sizeLods[r],L=3*S*(r>_-gs?r-_+gs:0),P=4*(this._cubeSize-S);Ga(t,L,P,3*S,2*S),l.setRenderTarget(t),l.render(d,uu)}}function yC(n){const e=[],t=[],i=[];let r=n;const s=n-gs+1+om.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-gs?l=om[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,y=6,v=3,m=2,f=1,g=new Float32Array(v*y*p),_=new Float32Array(m*y*p),S=new Float32Array(f*y*p);for(let P=0;P<p;P++){const b=P%3*2/3-1,k=P>2?0:-1,T=[b,k,0,b+2/3,k,0,b+2/3,k+1,0,b,k,0,b+2/3,k+1,0,b,k+1,0];g.set(T,v*y*P),_.set(h,m*y*P);const C=[P,P,P,P,P,P];S.set(C,f*y*P)}const L=new Mi;L.setAttribute("position",new ni(g,v)),L.setAttribute("uv",new ni(_,m)),L.setAttribute("faceIndex",new ni(S,f)),e.push(L),r>gs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function um(n,e,t){const i=new Dr(n,e,t);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ga(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xC(n,e,t){const i=new Float32Array(_r),r=new F(0,1,0);return new Ir({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function fm(){return new Ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function dm(){return new Ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sf||l===Ef,u=l===Ns||l===Os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new cm(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new cm(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function EC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MC(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const v=h.morphAttributes[y];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const v=p[y];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,y=d.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let _=0,S=g.length;_<S;_+=3){const L=g[_+0],P=g[_+1],b=g[_+2];h.push(L,P,P,b,b,L)}}else if(y!==void 0){const g=y.array;v=y.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const L=_+0,P=_+1,b=_+2;h.push(L,P,P,b,b,L)}}else return;const m=new(Yv(h)?n0:t0)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function TC(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,y){n.drawElements(s,y,a,p*l),t.update(y,s,1)}function d(p,y,v){if(v===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,y,a,p*l,v),t.update(y,s,v)}function h(p,y,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,y[f]);else{m.multiDrawElementsWEBGL(s,y,0,a,p,0,v);let f=0;for(let g=0;g<v;g++)f+=y[g];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function CC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RC(n,e){return n[0]-e[0]}function AC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wC(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=y!==void 0?y.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let z=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),L===!0&&(T=3);let C=u.attributes.position.count*T,V=1;C>e.maxTextureSize&&(V=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const j=new Float32Array(C*V*4*v),J=new Zv(j,C,V,v);J.type=Fi,J.needsUpdate=!0;const I=T*4;for(let $=0;$<v;$++){const K=P[$],U=b[$],B=k[$],W=C*V*4*$;for(let Y=0;Y<K.count;Y++){const Q=Y*I;_===!0&&(o.fromBufferAttribute(K,Y),j[W+Q+0]=o.x,j[W+Q+1]=o.y,j[W+Q+2]=o.z,j[W+Q+3]=0),S===!0&&(o.fromBufferAttribute(U,Y),j[W+Q+4]=o.x,j[W+Q+5]=o.y,j[W+Q+6]=o.z,j[W+Q+7]=0),L===!0&&(o.fromBufferAttribute(B,Y),j[W+Q+8]=o.x,j[W+Q+9]=o.y,j[W+Q+10]=o.z,j[W+Q+11]=B.itemSize===4?o.w:1)}}m={count:v,texture:J,size:new Ye(C,V)},s.set(u,m),u.addEventListener("dispose",z)}let f=0;for(let _=0;_<h.length;_++)f+=h[_];const g=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const y=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==y){v=[];for(let S=0;S<y;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<y;S++){const L=v[S];L[0]=S,L[1]=h[S]}v.sort(AC);for(let S=0;S<8;S++)S<y&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(RC);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const L=a[S],P=L[0],b=L[1];P!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+S)!==m[P]&&u.setAttribute("morphTarget"+S,m[P]),f&&u.getAttribute("morphNormal"+S)!==f[P]&&u.setAttribute("morphNormal"+S,f[P]),r[S]=b,g+=b):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const _=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function bC(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class l0 extends pn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Cr,u!==Cr&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cr&&(i=ki),i===void 0&&u===ks&&(i=Tr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const c0=new pn,u0=new l0(1,1);u0.compareFunction=$v;const f0=new Zv,d0=new hE,h0=new s0,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),_m=new Float32Array(4);function Vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hm[r];if(s===void 0&&(s=new Float32Array(r),hm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sc(n,e){let t=pm[e];t===void 0&&(t=new Int32Array(e),pm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function LC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function DC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function IC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function UC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;_m.set(i),n.uniformMatrix2fv(this.addr,!1,_m),wt(t,i)}}function NC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;gm.set(i),n.uniformMatrix3fv(this.addr,!1,gm),wt(t,i)}}function OC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;mm.set(i),n.uniformMatrix4fv(this.addr,!1,mm),wt(t,i)}}function kC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function zC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function BC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function GC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function VC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function WC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function XC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?u0:c0;t.setTexture2D(e||s,r)}function jC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||d0,r)}function $C(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||h0,r)}function YC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||f0,r)}function qC(n){switch(n){case 5126:return PC;case 35664:return LC;case 35665:return DC;case 35666:return IC;case 35674:return UC;case 35675:return NC;case 35676:return OC;case 5124:case 35670:return kC;case 35667:case 35671:return FC;case 35668:case 35672:return zC;case 35669:case 35673:return BC;case 5125:return GC;case 36294:return HC;case 36295:return VC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return jC;case 35680:case 36300:case 36308:case 36293:return $C;case 36289:case 36303:case 36311:case 36292:return YC}}function KC(n,e){n.uniform1fv(this.addr,e)}function ZC(n,e){const t=Vs(e,this.size,2);n.uniform2fv(this.addr,t)}function QC(n,e){const t=Vs(e,this.size,3);n.uniform3fv(this.addr,t)}function JC(n,e){const t=Vs(e,this.size,4);n.uniform4fv(this.addr,t)}function e1(n,e){const t=Vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t1(n,e){const t=Vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n1(n,e){const t=Vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function i1(n,e){n.uniform1iv(this.addr,e)}function r1(n,e){n.uniform2iv(this.addr,e)}function s1(n,e){n.uniform3iv(this.addr,e)}function o1(n,e){n.uniform4iv(this.addr,e)}function a1(n,e){n.uniform1uiv(this.addr,e)}function l1(n,e){n.uniform2uiv(this.addr,e)}function c1(n,e){n.uniform3uiv(this.addr,e)}function u1(n,e){n.uniform4uiv(this.addr,e)}function f1(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||c0,s[o])}function d1(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||d0,s[o])}function h1(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||h0,s[o])}function p1(n,e,t){const i=this.cache,r=e.length,s=sc(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||f0,s[o])}function m1(n){switch(n){case 5126:return KC;case 35664:return ZC;case 35665:return QC;case 35666:return JC;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}class g1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qC(t.type)}}class _1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m1(t.type)}}class v1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function vm(n,e){n.seq.push(e),n.map[e.id]=e}function y1(n,e,t){const i=n.name,r=i.length;for(pu.lastIndex=0;;){const s=pu.exec(i),o=pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vm(t,c===void 0?new g1(a,n,e):new _1(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new v1(a),vm(t,d)),t=d}}}class al{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);y1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ym(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const x1=37297;let S1=0;function E1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function M1(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===kl&&t===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&t===kl&&(i="LinearSRGBToLinearDisplayP3"),n){case Si:case ic:return[i,"LinearTransferOETF"];case kt:case Ud:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+E1(n.getShaderSource(e),o)}else return r}function T1(n,e){const t=M1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function C1(n,e){let t;switch(e){case OS:t="Linear";break;case kS:t="Reinhard";break;case FS:t="OptimizedCineon";break;case zS:t="ACESFilmic";break;case GS:t="AgX";break;case BS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function R1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function A1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_s).join(`
`)}function w1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _s(n){return n!==""}function Sm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(n){return n.replace(P1,D1)}const L1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function D1(n,e){let t=He[e];if(t===void 0){const i=L1.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wf(t)}const I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(n){return n.replace(I1,U1)}function U1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function O1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function F1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ov:e="ENVMAP_BLENDING_MULTIPLY";break;case US:e="ENVMAP_BLENDING_MIX";break;case NS:e="ENVMAP_BLENDING_ADD";break}return e}function z1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function B1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=N1(t),c=O1(t),u=k1(t),d=F1(t),h=z1(t),p=t.isWebGL2?"":R1(t),y=A1(t),v=w1(s),m=r.createProgram();let f,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_s).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_s).join(`
`),g.length>0&&(g+=`
`)):(f=[Tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),g=[p,Tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?He.tonemapping_pars_fragment:"",t.toneMapping!==qi?C1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,T1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),o=wf(o),o=Sm(o,t),o=Em(o,t),a=wf(a),a=Sm(a,t),a=Em(a,t),o=Mm(o),a=Mm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=_+f+o,L=_+g+a,P=ym(r,r.VERTEX_SHADER,S),b=ym(r,r.FRAGMENT_SHADER,L);r.attachShader(m,P),r.attachShader(m,b),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function k(j){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(P).trim(),z=r.getShaderInfoLog(b).trim();let $=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,P,b);else{const U=xm(r,P,"vertex"),B=xm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+U+`
`+B)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(I===""||z==="")&&(K=!1);K&&(j.diagnostics={runnable:$,programLog:J,vertexShader:{log:I,prefix:f},fragmentShader:{log:z,prefix:g}})}r.deleteShader(P),r.deleteShader(b),T=new al(r,m),C=b1(r,m)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(m,x1)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=b,this}let G1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new V1(e),t.set(e,i)),i}}class V1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function W1(n,e,t,i,r,s,o){const a=new Od,l=new H1,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return T===0?"uv":`uv${T}`}function m(T,C,V,j,J){const I=j.fog,z=J.geometry,$=T.isMeshStandardMaterial?j.environment:null,K=(T.isMeshStandardMaterial?t:e).get(T.envMap||$),U=K&&K.mapping===nc?K.image.height:null,B=y[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const W=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Y=W!==void 0?W.length:0;let Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let X,Z,ce,ye;if(B){const Ut=Qn[B];X=Ut.vertexShader,Z=Ut.fragmentShader}else X=T.vertexShader,Z=T.fragmentShader,l.update(T),ce=l.getVertexShaderID(T),ye=l.getFragmentShaderID(T);const Ee=n.getRenderTarget(),De=J.isInstancedMesh===!0,Ne=J.isBatchedMesh===!0,we=!!T.map,ze=!!T.matcap,G=!!K,It=!!T.aoMap,Re=!!T.lightMap,Ie=!!T.bumpMap,Te=!!T.normalMap,ot=!!T.displacementMap,Ue=!!T.emissiveMap,A=!!T.metalnessMap,E=!!T.roughnessMap,H=T.anisotropy>0,ne=T.clearcoat>0,te=T.iridescence>0,re=T.sheen>0,Me=T.transmission>0,le=H&&!!T.anisotropyMap,_e=ne&&!!T.clearcoatMap,be=ne&&!!T.clearcoatNormalMap,ke=ne&&!!T.clearcoatRoughnessMap,ee=te&&!!T.iridescenceMap,qe=te&&!!T.iridescenceThicknessMap,Be=re&&!!T.sheenColorMap,Le=re&&!!T.sheenRoughnessMap,Ce=!!T.specularMap,xe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,Ke=Me&&!!T.transmissionMap,lt=Me&&!!T.thicknessMap,Ge=!!T.gradientMap,oe=!!T.alphaMap,D=T.alphaTest>0,ue=!!T.alphaHash,fe=!!T.extensions,Pe=!!z.attributes.uv1,Ae=!!z.attributes.uv2,it=!!z.attributes.uv3;let je=qi;return T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(je=n.toneMapping),{isWebGL2:u,shaderID:B,shaderType:T.type,shaderName:T.name,vertexShader:X,fragmentShader:Z,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ne,instancing:De,instancingColor:De&&J.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Si,map:we,matcap:ze,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:U,aoMap:It,lightMap:Re,bumpMap:Ie,normalMap:Te,displacementMap:h&&ot,emissiveMap:Ue,normalMapObjectSpace:Te&&T.normalMapType===JS,normalMapTangentSpace:Te&&T.normalMapType===jv,metalnessMap:A,roughnessMap:E,anisotropy:H,anisotropyMap:le,clearcoat:ne,clearcoatMap:_e,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:qe,sheen:re,sheenColorMap:Be,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:xe,specularIntensityMap:Fe,transmission:Me,transmissionMap:Ke,thicknessMap:lt,gradientMap:Ge,opaque:T.transparent===!1&&T.blending===Rs,alphaMap:oe,alphaTest:D,alphaHash:ue,combine:T.combine,mapUv:we&&v(T.map.channel),aoMapUv:It&&v(T.aoMap.channel),lightMapUv:Re&&v(T.lightMap.channel),bumpMapUv:Ie&&v(T.bumpMap.channel),normalMapUv:Te&&v(T.normalMap.channel),displacementMapUv:ot&&v(T.displacementMap.channel),emissiveMapUv:Ue&&v(T.emissiveMap.channel),metalnessMapUv:A&&v(T.metalnessMap.channel),roughnessMapUv:E&&v(T.roughnessMap.channel),anisotropyMapUv:le&&v(T.anisotropyMap.channel),clearcoatMapUv:_e&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(T.sheenRoughnessMap.channel),specularMapUv:Ce&&v(T.specularMap.channel),specularColorMapUv:xe&&v(T.specularColorMap.channel),specularIntensityMapUv:Fe&&v(T.specularIntensityMap.channel),transmissionMapUv:Ke&&v(T.transmissionMap.channel),thicknessMapUv:lt&&v(T.thicknessMap.channel),alphaMapUv:oe&&v(T.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Te||H),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ae,vertexUv3s:it,pointsUvs:J.isPoints===!0&&!!z.attributes.uv&&(we||oe),fog:!!I,useFog:T.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&T.map.isVideoTexture===!0&&st.getTransfer(T.map.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fi,flipSided:T.side===hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:fe&&T.extensions.derivatives===!0,extensionFragDepth:fe&&T.extensions.fragDepth===!0,extensionDrawBuffers:fe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function f(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)C.push(V),C.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(g(C,T),_(C,T),C.push(n.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function g(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function _(T,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),T.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function S(T){const C=y[T.type];let V;if(C){const j=Qn[C];V=RE.clone(j.uniforms)}else V=T.uniforms;return V}function L(T,C){let V;for(let j=0,J=c.length;j<J;j++){const I=c[j];if(I.cacheKey===C){V=I,++V.usedTimes;break}}return V===void 0&&(V=new B1(n,C,T,s),c.push(V)),V}function P(T){if(--T.usedTimes===0){const C=c.indexOf(T);c[C]=c[c.length-1],c.pop(),T.destroy()}}function b(T){l.remove(T)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:L,releaseProgram:P,releaseShaderCache:b,programs:c,dispose:k}}function X1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function j1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,y,v,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:v,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,h,p,y,v,m){const f=o(d,h,p,y,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,y,v,m){const f=o(d,h,p,y,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||j1),i.length>1&&i.sort(h||Cm),r.length>1&&r.sort(h||Cm)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rm,n.set(i,[o])):r>=s.length?(o=new Rm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Y1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Je};break;case"SpotLight":t={position:new F,direction:new F,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function q1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let K1=0;function Z1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Q1(n,e){const t=new Y1,i=q1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new Rt,a=new Rt;function l(u,d){let h=0,p=0,y=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let v=0,m=0,f=0,g=0,_=0,S=0,L=0,P=0,b=0,k=0,T=0;u.sort(Z1);const C=d===!0?Math.PI:1;for(let j=0,J=u.length;j<J;j++){const I=u[j],z=I.color,$=I.intensity,K=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*$*C,p+=z.g*$*C,y+=z.b*$*C;else if(I.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],$);T++}else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const W=I.shadow,Y=i.get(I);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[v]=Y,r.directionalShadowMap[v]=U,r.directionalShadowMatrix[v]=I.shadow.matrix,S++}r.directional[v]=B,v++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(z).multiplyScalar($*C),B.distance=K,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[f]=B;const W=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,W.updateMatrices(I),I.castShadow&&k++),r.spotLightMatrix[f]=W.matrix,I.castShadow){const Y=i.get(I);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[f]=Y,r.spotShadowMap[f]=U,P++}f++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(z).multiplyScalar($),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=B,g++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*C),B.distance=I.distance,B.decay=I.decay,I.castShadow){const W=I.shadow,Y=i.get(I);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=I.shadow.matrix,L++}r.point[m]=B,m++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar($*C),B.groundColor.copy(I.groundColor).multiplyScalar($*C),r.hemi[_]=B,_++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=y;const V=r.hash;(V.directionalLength!==v||V.pointLength!==m||V.spotLength!==f||V.rectAreaLength!==g||V.hemiLength!==_||V.numDirectionalShadows!==S||V.numPointShadows!==L||V.numSpotShadows!==P||V.numSpotMaps!==b||V.numLightProbes!==T)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+b-k,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=T,V.directionalLength=v,V.pointLength=m,V.spotLength=f,V.rectAreaLength=g,V.hemiLength=_,V.numDirectionalShadows=S,V.numPointShadows=L,V.numSpotShadows=P,V.numSpotMaps=b,V.numLightProbes=T,r.version=K1++)}function c(u,d){let h=0,p=0,y=0,v=0,m=0;const f=d.matrixWorldInverse;for(let g=0,_=u.length;g<_;g++){const S=u[g];if(S.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),h++}else if(S.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),y++}else if(S.isRectAreaLight){const L=r.rectArea[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const L=r.point[p];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const L=r.hemi[m];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Am(n,e){const t=new Q1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function J1(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Am(n,e),t.set(s,[l])):o>=a.length?(l=new Am(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class eR extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tR extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rR(n,e,t){let i=new kd;const r=new Ye,s=new Ye,o=new Lt,a=new eR({depthPacking:QS}),l=new tR,c={},u=t.maxTextureSize,d={[er]:hn,[hn]:er,[fi]:fi},h=new Ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:nR,fragmentShader:iR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new Mi;y.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ln(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nv;let f=this.type;this.render=function(P,b,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Yi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const J=f!==li&&this.type===li,I=f===li&&this.type!==li;for(let z=0,$=P.length;z<$;z++){const K=P[z],U=K.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const B=U.getFrameExtents();if(r.multiply(B),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,U.mapSize.y=s.y)),U.map===null||J===!0||I===!0){const Y=this.type!==li?{minFilter:Qt,magFilter:Qt}:{};U.map!==null&&U.map.dispose(),U.map=new Dr(r.x,r.y,Y),U.map.texture.name=K.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const W=U.getViewportCount();for(let Y=0;Y<W;Y++){const Q=U.getViewport(Y);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),j.viewport(o),U.updateMatrices(K,Y),i=U.getFrustum(),S(b,k,U.camera,K,this.type)}U.isPointLightShadow!==!0&&this.type===li&&g(U,k),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,V)};function g(P,b){const k=e.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Dr(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(b,null,k,h,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(b,null,k,p,v,null)}function _(P,b,k,T){let C=null;const V=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)C=V;else if(C=k.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const j=C.uuid,J=b.uuid;let I=c[j];I===void 0&&(I={},c[j]=I);let z=I[J];z===void 0&&(z=C.clone(),I[J]=z,b.addEventListener("dispose",L)),C=z}if(C.visible=b.visible,C.wireframe=b.wireframe,T===li?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:d[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const j=n.properties.get(C);j.light=k}return C}function S(P,b,k,T,C){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===li)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const J=e.update(P),I=P.material;if(Array.isArray(I)){const z=J.groups;for(let $=0,K=z.length;$<K;$++){const U=z[$],B=I[U.materialIndex];if(B&&B.visible){const W=_(P,B,T,C);P.onBeforeShadow(n,P,b,k,J,W,U),n.renderBufferDirect(k,null,J,W,P,U),P.onAfterShadow(n,P,b,k,J,W,U)}}}else if(I.visible){const z=_(P,I,T,C);P.onBeforeShadow(n,P,b,k,J,z,null),n.renderBufferDirect(k,null,J,z,P,null),P.onAfterShadow(n,P,b,k,J,z,null)}}const j=P.children;for(let J=0,I=j.length;J<I;J++)S(j[J],b,k,T,C)}function L(P){P.target.removeEventListener("dispose",L);for(const k in c){const T=c[k],C=P.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function sR(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ue=new Lt;let fe=null;const Pe=new Lt(0,0,0,0);return{setMask:function(Ae){fe!==Ae&&!D&&(n.colorMask(Ae,Ae,Ae,Ae),fe=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,it,je,yt,Ut){Ut===!0&&(Ae*=yt,it*=yt,je*=yt),ue.set(Ae,it,je,yt),Pe.equals(ue)===!1&&(n.clearColor(Ae,it,je,yt),Pe.copy(ue))},reset:function(){D=!1,fe=null,Pe.set(-1,0,0,0)}}}function s(){let D=!1,ue=null,fe=null,Pe=null;return{setTest:function(Ae){Ae?Ne(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Ae){ue!==Ae&&!D&&(n.depthMask(Ae),ue=Ae)},setFunc:function(Ae){if(fe!==Ae){switch(Ae){case AS:n.depthFunc(n.NEVER);break;case wS:n.depthFunc(n.ALWAYS);break;case bS:n.depthFunc(n.LESS);break;case Ul:n.depthFunc(n.LEQUAL);break;case PS:n.depthFunc(n.EQUAL);break;case LS:n.depthFunc(n.GEQUAL);break;case DS:n.depthFunc(n.GREATER);break;case IS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Ae}},setLocked:function(Ae){D=Ae},setClear:function(Ae){Pe!==Ae&&(n.clearDepth(Ae),Pe=Ae)},reset:function(){D=!1,ue=null,fe=null,Pe=null}}}function o(){let D=!1,ue=null,fe=null,Pe=null,Ae=null,it=null,je=null,yt=null,Ut=null;return{setTest:function(tt){D||(tt?Ne(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!D&&(n.stencilMask(tt),ue=tt)},setFunc:function(tt,Nt,Tn){(fe!==tt||Pe!==Nt||Ae!==Tn)&&(n.stencilFunc(tt,Nt,Tn),fe=tt,Pe=Nt,Ae=Tn)},setOp:function(tt,Nt,Tn){(it!==tt||je!==Nt||yt!==Tn)&&(n.stencilOp(tt,Nt,Tn),it=tt,je=Nt,yt=Tn)},setLocked:function(tt){D=tt},setClear:function(tt){Ut!==tt&&(n.clearStencil(tt),Ut=tt)},reset:function(){D=!1,ue=null,fe=null,Pe=null,Ae=null,it=null,je=null,yt=null,Ut=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},y=new WeakMap,v=[],m=null,f=!1,g=null,_=null,S=null,L=null,P=null,b=null,k=null,T=new Je(0,0,0),C=0,V=!1,j=null,J=null,I=null,z=null,$=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=B>=2);let Y=null,Q={};const X=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ce=new Lt().fromArray(X),ye=new Lt().fromArray(Z);function Ee(D,ue,fe,Pe){const Ae=new Uint8Array(4),it=n.createTexture();n.bindTexture(D,it),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<fe;je++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ue+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return it}const De={};De[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(Ul),Ue(!1),A(lp),Ne(n.CULL_FACE),Te(Yi);function Ne(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function we(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function ze(D,ue){return p[D]!==ue?(n.bindFramebuffer(D,ue),p[D]=ue,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function G(D,ue){let fe=v,Pe=!1;if(D)if(fe=y.get(ue),fe===void 0&&(fe=[],y.set(ue,fe)),D.isWebGLMultipleRenderTargets){const Ae=D.texture;if(fe.length!==Ae.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let it=0,je=Ae.length;it<je;it++)fe[it]=n.COLOR_ATTACHMENT0+it;fe.length=Ae.length,Pe=!0}}else fe[0]!==n.COLOR_ATTACHMENT0&&(fe[0]=n.COLOR_ATTACHMENT0,Pe=!0);else fe[0]!==n.BACK&&(fe[0]=n.BACK,Pe=!0);Pe&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function It(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Re={[gr]:n.FUNC_ADD,[dS]:n.FUNC_SUBTRACT,[hS]:n.FUNC_REVERSE_SUBTRACT};if(i)Re[dp]=n.MIN,Re[hp]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Re[dp]=D.MIN_EXT,Re[hp]=D.MAX_EXT)}const Ie={[pS]:n.ZERO,[mS]:n.ONE,[gS]:n.SRC_COLOR,[yf]:n.SRC_ALPHA,[ES]:n.SRC_ALPHA_SATURATE,[xS]:n.DST_COLOR,[vS]:n.DST_ALPHA,[_S]:n.ONE_MINUS_SRC_COLOR,[xf]:n.ONE_MINUS_SRC_ALPHA,[SS]:n.ONE_MINUS_DST_COLOR,[yS]:n.ONE_MINUS_DST_ALPHA,[MS]:n.CONSTANT_COLOR,[TS]:n.ONE_MINUS_CONSTANT_COLOR,[CS]:n.CONSTANT_ALPHA,[RS]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(D,ue,fe,Pe,Ae,it,je,yt,Ut,tt){if(D===Yi){f===!0&&(we(n.BLEND),f=!1);return}if(f===!1&&(Ne(n.BLEND),f=!0),D!==fS){if(D!==g||tt!==V){if((_!==gr||P!==gr)&&(n.blendEquation(n.FUNC_ADD),_=gr,P=gr),tt)switch(D){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cp:n.blendFunc(n.ONE,n.ONE);break;case up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case up:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,L=null,b=null,k=null,T.set(0,0,0),C=0,g=D,V=tt}return}Ae=Ae||ue,it=it||fe,je=je||Pe,(ue!==_||Ae!==P)&&(n.blendEquationSeparate(Re[ue],Re[Ae]),_=ue,P=Ae),(fe!==S||Pe!==L||it!==b||je!==k)&&(n.blendFuncSeparate(Ie[fe],Ie[Pe],Ie[it],Ie[je]),S=fe,L=Pe,b=it,k=je),(yt.equals(T)===!1||Ut!==C)&&(n.blendColor(yt.r,yt.g,yt.b,Ut),T.copy(yt),C=Ut),g=D,V=!1}function ot(D,ue){D.side===fi?we(n.CULL_FACE):Ne(n.CULL_FACE);let fe=D.side===hn;ue&&(fe=!fe),Ue(fe),D.blending===Rs&&D.transparent===!1?Te(Yi):Te(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Pe=D.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){j!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),j=D)}function A(D){D!==lS?(Ne(n.CULL_FACE),D!==J&&(D===lp?n.cullFace(n.BACK):D===cS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),J=D}function E(D){D!==I&&(U&&n.lineWidth(D),I=D)}function H(D,ue,fe){D?(Ne(n.POLYGON_OFFSET_FILL),(z!==ue||$!==fe)&&(n.polygonOffset(ue,fe),z=ue,$=fe)):we(n.POLYGON_OFFSET_FILL)}function ne(D){D?Ne(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function te(D){D===void 0&&(D=n.TEXTURE0+K-1),Y!==D&&(n.activeTexture(D),Y=D)}function re(D,ue,fe){fe===void 0&&(Y===null?fe=n.TEXTURE0+K-1:fe=Y);let Pe=Q[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},Q[fe]=Pe),(Pe.type!==D||Pe.texture!==ue)&&(Y!==fe&&(n.activeTexture(fe),Y=fe),n.bindTexture(D,ue||De[D]),Pe.type=D,Pe.texture=ue)}function Me(){const D=Q[Y];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){ce.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function Ke(D){ye.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function lt(D,ue){let fe=d.get(ue);fe===void 0&&(fe=new WeakMap,d.set(ue,fe));let Pe=fe.get(D);Pe===void 0&&(Pe=n.getUniformBlockIndex(ue,D.name),fe.set(D,Pe))}function Ge(D,ue){const Pe=d.get(ue).get(D);u.get(ue)!==Pe&&(n.uniformBlockBinding(ue,Pe,D.__bindingPointIndex),u.set(ue,Pe))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Y=null,Q={},p={},y=new WeakMap,v=[],m=null,f=!1,g=null,_=null,S=null,L=null,P=null,b=null,k=null,T=new Je(0,0,0),C=0,V=!1,j=null,J=null,I=null,z=null,$=null,ce.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:we,bindFramebuffer:ze,drawBuffers:G,useProgram:It,setBlending:Te,setMaterial:ot,setFlipSided:Ue,setCullFace:A,setLineWidth:E,setPolygonOffset:H,setScissorTest:ne,activeTexture:te,bindTexture:re,unbindTexture:Me,compressedTexImage2D:le,compressedTexImage3D:_e,texImage2D:Ce,texImage3D:xe,updateUBOMapping:lt,uniformBlockBinding:Ge,texStorage2D:Be,texStorage3D:Le,texSubImage2D:be,texSubImage3D:ke,compressedTexSubImage2D:ee,compressedTexSubImage3D:qe,scissor:Fe,viewport:Ke,reset:oe}}function oR(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return p?new OffscreenCanvas(A,E):zl("canvas")}function v(A,E,H,ne){let te=1;if((A.width>ne||A.height>ne)&&(te=ne/Math.max(A.width,A.height)),te<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=E?Af:Math.floor,Me=re(te*A.width),le=re(te*A.height);d===void 0&&(d=y(Me,le));const _e=H?y(Me,le):d;return _e.width=Me,_e.height=le,_e.getContext("2d").drawImage(A,0,0,Me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+le+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Vp(A.width)&&Vp(A.height)}function f(A){return a?!1:A.wrapS!==Wn||A.wrapT!==Wn||A.minFilter!==Qt&&A.minFilter!==bn}function g(A,E){return A.generateMipmaps&&E&&A.minFilter!==Qt&&A.minFilter!==bn}function _(A){n.generateMipmap(A)}function S(A,E,H,ne,te=!1){if(a===!1)return E;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=E;if(E===n.RED&&(H===n.FLOAT&&(re=n.R32F),H===n.HALF_FLOAT&&(re=n.R16F),H===n.UNSIGNED_BYTE&&(re=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(re=n.R8UI),H===n.UNSIGNED_SHORT&&(re=n.R16UI),H===n.UNSIGNED_INT&&(re=n.R32UI),H===n.BYTE&&(re=n.R8I),H===n.SHORT&&(re=n.R16I),H===n.INT&&(re=n.R32I)),E===n.RG&&(H===n.FLOAT&&(re=n.RG32F),H===n.HALF_FLOAT&&(re=n.RG16F),H===n.UNSIGNED_BYTE&&(re=n.RG8)),E===n.RGBA){const Me=te?Nl:st.getTransfer(ne);H===n.FLOAT&&(re=n.RGBA32F),H===n.HALF_FLOAT&&(re=n.RGBA16F),H===n.UNSIGNED_BYTE&&(re=Me===ft?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function L(A,E,H){return g(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function P(A){return A===Qt||A===pp||A===zc?n.NEAREST:n.LINEAR}function b(A){const E=A.target;E.removeEventListener("dispose",b),T(E),E.isVideoTexture&&u.delete(E)}function k(A){const E=A.target;E.removeEventListener("dispose",k),V(E)}function T(A){const E=i.get(A);if(E.__webglInit===void 0)return;const H=A.source,ne=h.get(H);if(ne){const te=ne[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(A),Object.keys(ne).length===0&&h.delete(H)}i.remove(A)}function C(A){const E=i.get(A);n.deleteTexture(E.__webglTexture);const H=A.source,ne=h.get(H);delete ne[E.__cacheKey],o.memory.textures--}function V(A){const E=A.texture,H=i.get(A),ne=i.get(E);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let re=0;re<H.__webglFramebuffer[te].length;re++)n.deleteFramebuffer(H.__webglFramebuffer[te][re]);else n.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)n.deleteFramebuffer(H.__webglFramebuffer[te]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,re=E.length;te<re;te++){const Me=i.get(E[te]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[te])}i.remove(E),i.remove(A)}let j=0;function J(){j=0}function I(){const A=j;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),j+=1,A}function z(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function $(A,E){const H=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,A,E);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function K(A,E){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ce(H,A,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function U(A,E){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ce(H,A,E);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function B(A,E){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ye(H,A,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const W={[Mf]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[Tf]:n.MIRRORED_REPEAT},Y={[Qt]:n.NEAREST,[pp]:n.NEAREST_MIPMAP_NEAREST,[zc]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[HS]:n.LINEAR_MIPMAP_NEAREST,[Vo]:n.LINEAR_MIPMAP_LINEAR},Q={[eE]:n.NEVER,[oE]:n.ALWAYS,[tE]:n.LESS,[$v]:n.LEQUAL,[nE]:n.EQUAL,[sE]:n.GEQUAL,[iE]:n.GREATER,[rE]:n.NOTEQUAL};function X(A,E,H){if(H?(n.texParameteri(A,n.TEXTURE_WRAP_S,W[E.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,W[E.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,W[E.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Y[E.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Y[E.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Wn||E.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,P(E.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==Qt&&E.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Qt||E.minFilter!==zc&&E.minFilter!==Vo||E.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Wo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Z(A,E){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",b));const ne=E.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const re=z(E);if(re!==A.__cacheKey){te[re]===void 0&&(te[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[re].usedTimes++;const Me=te[A.__cacheKey];Me!==void 0&&(te[A.__cacheKey].usedTimes--,Me.usedTimes===0&&C(E)),A.__cacheKey=re,A.__webglTexture=te[re].texture}return H}function ce(A,E,H){let ne=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=n.TEXTURE_3D);const te=Z(A,E),re=E.source;t.bindTexture(ne,A.__webglTexture,n.TEXTURE0+H);const Me=i.get(re);if(re.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+H);const le=st.getPrimaries(st.workingColorSpace),_e=E.colorSpace===Ln?null:st.getPrimaries(E.colorSpace),be=E.colorSpace===Ln||le===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ke=f(E)&&m(E.image)===!1;let ee=v(E.image,ke,!1,r.maxTextureSize);ee=Ue(E,ee);const qe=m(ee)||a,Be=s.convert(E.format,E.colorSpace);let Le=s.convert(E.type),Ce=S(E.internalFormat,Be,Le,E.colorSpace,E.isVideoTexture);X(ne,E,qe);let xe;const Fe=E.mipmaps,Ke=a&&E.isVideoTexture!==!0&&Ce!==Wv,lt=Me.__version===void 0||te===!0,Ge=L(E,ee,qe);if(E.isDepthTexture)Ce=n.DEPTH_COMPONENT,a?E.type===Fi?Ce=n.DEPTH_COMPONENT32F:E.type===ki?Ce=n.DEPTH_COMPONENT24:E.type===Tr?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:E.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Cr&&Ce===n.DEPTH_COMPONENT&&E.type!==Id&&E.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ki,Le=s.convert(E.type)),E.format===ks&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,E.type!==Tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Tr,Le=s.convert(E.type))),lt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Be,Le,null));else if(E.isDataTexture)if(Fe.length>0&&qe){Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ce,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)xe=Fe[oe],Ke?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,Be,Le,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Ce,xe.width,xe.height,0,Be,Le,xe.data);E.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ce,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Be,Le,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Be,Le,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ce,Fe[0].width,Fe[0].height,ee.depth);for(let oe=0,D=Fe.length;oe<D;oe++)xe=Fe[oe],E.format!==Xn?Be!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ee.depth,Be,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ce,xe.width,xe.height,ee.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ee.depth,Be,Le,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ce,xe.width,xe.height,ee.depth,0,Be,Le,xe.data)}else{Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ce,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)xe=Fe[oe],E.format!==Xn?Be!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,Be,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe.width,xe.height,Be,Le,xe.data):t.texImage2D(n.TEXTURE_2D,oe,Ce,xe.width,xe.height,0,Be,Le,xe.data)}else if(E.isDataArrayTexture)Ke?(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ce,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Be,Le,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,Be,Le,ee.data);else if(E.isData3DTexture)Ke?(lt&&t.texStorage3D(n.TEXTURE_3D,Ge,Ce,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Be,Le,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,Be,Le,ee.data);else if(E.isFramebufferTexture){if(lt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Ge,Ce,ee.width,ee.height);else{let oe=ee.width,D=ee.height;for(let ue=0;ue<Ge;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ce,oe,D,0,Be,Le,null),oe>>=1,D>>=1}}else if(Fe.length>0&&qe){Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ce,Fe[0].width,Fe[0].height);for(let oe=0,D=Fe.length;oe<D;oe++)xe=Fe[oe],Ke?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Be,Le,xe):t.texImage2D(n.TEXTURE_2D,oe,Ce,Be,Le,xe);E.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ce,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Le,ee)):t.texImage2D(n.TEXTURE_2D,0,Ce,Be,Le,ee);g(E,qe)&&_(ne),Me.__version=re.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ye(A,E,H){if(E.image.length!==6)return;const ne=Z(A,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const re=i.get(te);if(te.version!==re.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const Me=st.getPrimaries(st.workingColorSpace),le=E.colorSpace===Ln?null:st.getPrimaries(E.colorSpace),_e=E.colorSpace===Ln||Me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!be&&!ke?ee[oe]=v(E.image[oe],!1,!0,r.maxCubemapSize):ee[oe]=ke?E.image[oe].image:E.image[oe],ee[oe]=Ue(E,ee[oe]);const qe=ee[0],Be=m(qe)||a,Le=s.convert(E.format,E.colorSpace),Ce=s.convert(E.type),xe=S(E.internalFormat,Le,Ce,E.colorSpace),Fe=a&&E.isVideoTexture!==!0,Ke=re.__version===void 0||ne===!0;let lt=L(E,qe,Be);X(n.TEXTURE_CUBE_MAP,E,Be);let Ge;if(be){Fe&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,xe,qe.width,qe.height);for(let oe=0;oe<6;oe++){Ge=ee[oe].mipmaps;for(let D=0;D<Ge.length;D++){const ue=Ge[D];E.format!==Xn?Le!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,ue.width,ue.height,Le,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,ue.width,ue.height,Le,Ce,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,xe,ue.width,ue.height,0,Le,Ce,ue.data)}}}else{Ge=E.mipmaps,Fe&&Ke&&(Ge.length>0&&lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,xe,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(ke){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,Le,Ce,ee[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,ee[oe].width,ee[oe].height,0,Le,Ce,ee[oe].data);for(let D=0;D<Ge.length;D++){const fe=Ge[D].image[oe].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,fe.width,fe.height,Le,Ce,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,xe,fe.width,fe.height,0,Le,Ce,fe.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,Ce,ee[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,Le,Ce,ee[oe]);for(let D=0;D<Ge.length;D++){const ue=Ge[D];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,Le,Ce,ue.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,xe,Le,Ce,ue.image[oe])}}}g(E,Be)&&_(n.TEXTURE_CUBE_MAP),re.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ee(A,E,H,ne,te,re){const Me=s.convert(H.format,H.colorSpace),le=s.convert(H.type),_e=S(H.internalFormat,Me,le,H.colorSpace);if(!i.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>re),ee=Math.max(1,E.height>>re);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,re,_e,ke,ee,E.depth,0,Me,le,null):t.texImage2D(te,re,_e,ke,ee,0,Me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Te(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,0,Ie(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(A,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||Te(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===Fi?ne=n.DEPTH_COMPONENT32F:te.type===ki&&(ne=n.DEPTH_COMPONENT24));const re=Ie(E);Te(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ne,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ne,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Ie(E);H&&Te(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,E.width,E.height):Te(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0;te<ne.length;te++){const re=ne[te],Me=s.convert(re.format,re.colorSpace),le=s.convert(re.type),_e=S(re.internalFormat,Me,le,re.colorSpace),be=Ie(E);H&&Te(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,_e,E.width,E.height):Te(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,te=Ie(E);if(E.depthTexture.format===Cr)Te(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(E.depthTexture.format===ks)Te(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function we(A){const E=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(E.__webglFramebuffer,A)}else if(H){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=n.createRenderbuffer(),De(E.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),De(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,E,H){const ne=i.get(A);E!==void 0&&Ee(ne.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&we(A)}function G(A){const E=A.texture,H=i.get(A),ne=i.get(E);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,o.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,Me=m(A)||a;if(te){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let _e=0;_e<E.mipmaps.length;_e++)H.__webglFramebuffer[le][_e]=n.createFramebuffer()}else H.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)H.__webglFramebuffer[le]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const le=A.texture;for(let _e=0,be=le.length;_e<be;_e++){const ke=i.get(le[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Te(A)===!1){const le=re?E:[E];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<le.length;_e++){const be=le[_e];H.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const ke=s.convert(be.format,be.colorSpace),ee=s.convert(be.type),qe=S(be.internalFormat,ke,ee,be.colorSpace,A.isXRRenderTarget===!0),Be=Ie(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,qe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),De(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),X(n.TEXTURE_CUBE_MAP,E,Me);for(let le=0;le<6;le++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ee(H.__webglFramebuffer[le][_e],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,_e);else Ee(H.__webglFramebuffer[le],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(E,Me)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const le=A.texture;for(let _e=0,be=le.length;_e<be;_e++){const ke=le[_e],ee=i.get(ke);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),X(n.TEXTURE_2D,ke,Me),Ee(H.__webglFramebuffer,A,ke,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),g(ke,Me)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),X(le,E,Me),a&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ee(H.__webglFramebuffer[_e],A,E,n.COLOR_ATTACHMENT0,le,_e);else Ee(H.__webglFramebuffer,A,E,n.COLOR_ATTACHMENT0,le,0);g(E,Me)&&_(le),t.unbindTexture()}A.depthBuffer&&we(A)}function It(A){const E=m(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,te=H.length;ne<te;ne++){const re=H[ne];if(g(re,E)){const Me=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(re).__webglTexture;t.bindTexture(Me,le),_(Me),t.unbindTexture()}}}function Re(A){if(a&&A.samples>0&&Te(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,ne=A.height;let te=n.COLOR_BUFFER_BIT;const re=[],Me=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(A),_e=A.isWebGLMultipleRenderTargets===!0;if(_e)for(let be=0;be<E.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<E.length;be++){re.push(n.COLOR_ATTACHMENT0+be),A.depthBuffer&&re.push(Me);const ke=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ke===!1&&(A.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]),ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),_e){const ee=i.get(E[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,te,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let be=0;be<E.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const ke=i.get(E[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(r.maxSamples,A.samples)}function Te(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(A){const E=o.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function Ue(A,E){const H=A.colorSpace,ne=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Cf||H!==Si&&H!==Ln&&(st.getTransfer(H)===ft?a===!1?e.has("EXT_sRGB")===!0&&ne===Xn?(A.format=Cf,A.minFilter=bn,A.generateMipmaps=!1):E=qv.sRGBToLinear(E):(ne!==Xn||te!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=ze,this.setupRenderTarget=G,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Te}function aR(n,e,t){const i=t.isWebGL2;function r(s,o=Ln){let a;const l=st.getTransfer(o);if(s===Ki)return n.UNSIGNED_BYTE;if(s===zv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Bv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===VS)return n.BYTE;if(s===WS)return n.SHORT;if(s===Id)return n.UNSIGNED_SHORT;if(s===Fv)return n.INT;if(s===ki)return n.UNSIGNED_INT;if(s===Fi)return n.FLOAT;if(s===Wo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===XS)return n.ALPHA;if(s===Xn)return n.RGBA;if(s===jS)return n.LUMINANCE;if(s===$S)return n.LUMINANCE_ALPHA;if(s===Cr)return n.DEPTH_COMPONENT;if(s===ks)return n.DEPTH_STENCIL;if(s===Cf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===YS)return n.RED;if(s===Gv)return n.RED_INTEGER;if(s===qS)return n.RG;if(s===Hv)return n.RG_INTEGER;if(s===Vv)return n.RGBA_INTEGER;if(s===Bc||s===Gc||s===Hc||s===Vc)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===_p||s===vp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_p)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===yp||s===xp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===yp)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sp||s===Ep||s===Mp||s===Tp||s===Cp||s===Rp||s===Ap||s===wp||s===bp||s===Pp||s===Lp||s===Dp||s===Ip||s===Up)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ep)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ap)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dp)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Up)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wc||s===Np||s===Op)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wc)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Np)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Op)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===KS||s===kp||s===Fp||s===zp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Tr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class lR extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cR={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class uR extends Hs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,y=null;const v=t.getContextAttributes();let m=null,f=null;const g=[],_=[],S=new Ye;let L=null;const P=new Pn;P.layers.enable(1),P.viewport=new Lt;const b=new Pn;b.layers.enable(2),b.viewport=new Lt;const k=[P,b],T=new lR;T.layers.enable(1),T.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=g[X];return Z===void 0&&(Z=new mu,g[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=g[X];return Z===void 0&&(Z=new mu,g[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=g[X];return Z===void 0&&(Z=new mu,g[X]=Z),Z.getHandSpace()};function j(X){const Z=_.indexOf(X.inputSource);if(Z===-1)return;const ce=g[Z];ce!==void 0&&(ce.update(X.inputSource,X.frame,c||o),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",I);for(let X=0;X<g.length;X++){const Z=_[X];Z!==null&&(_[X]=null,g[X].disconnect(Z))}C=null,V=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",J),r.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Dr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,ce=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?ks:Cr,ce=v.stencil?Tr:ki);const Ee={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Dr(h.textureWidth,h.textureHeight,{format:Xn,type:Ki,depthTexture:new l0(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(X){for(let Z=0;Z<X.removed.length;Z++){const ce=X.removed[Z],ye=_.indexOf(ce);ye>=0&&(_[ye]=null,g[ye].disconnect(ce))}for(let Z=0;Z<X.added.length;Z++){const ce=X.added[Z];let ye=_.indexOf(ce);if(ye===-1){for(let De=0;De<g.length;De++)if(De>=_.length){_.push(ce),ye=De;break}else if(_[De]===null){_[De]=ce,ye=De;break}if(ye===-1)break}const Ee=g[ye];Ee&&Ee.connect(ce)}}const z=new F,$=new F;function K(X,Z,ce){z.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const ye=z.distanceTo($),Ee=Z.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),we=Ee[14]/(Ee[10]+1),ze=(Ee[9]+1)/Ee[5],G=(Ee[9]-1)/Ee[5],It=(Ee[8]-1)/Ee[0],Re=(De[8]+1)/De[0],Ie=Ne*It,Te=Ne*Re,ot=ye/(-It+Re),Ue=ot*-It;Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ue),X.translateZ(ot),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Ne+ot,E=we+ot,H=Ie-Ue,ne=Te+(ye-Ue),te=ze*we/E*A,re=G*we/E*A;X.projectionMatrix.makePerspective(H,ne,te,re,A,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function U(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;T.near=b.near=P.near=X.near,T.far=b.far=P.far=X.far,(C!==T.near||V!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,V=T.far);const Z=X.parent,ce=T.cameras;U(T,Z);for(let ye=0;ye<ce.length;ye++)U(ce[ye],Z);ce.length===2?K(T,P,b):T.projectionMatrix.copy(P.projectionMatrix),B(X,T,Z)};function B(X,Z,ce){ce===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Rf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let W=null;function Y(X,Z){if(u=Z.getViewerPose(c||o),y=Z,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ye=!1;ce.length!==T.cameras.length&&(T.cameras.length=0,ye=!0);for(let Ee=0;Ee<ce.length;Ee++){const De=ce[Ee];let Ne=null;if(p!==null)Ne=p.getViewport(De);else{const ze=d.getViewSubImage(h,De);Ne=ze.viewport,Ee===0&&(e.setRenderTargetTextures(f,ze.colorTexture,h.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(f))}let we=k[Ee];we===void 0&&(we=new Pn,we.layers.enable(Ee),we.viewport=new Lt,k[Ee]=we),we.matrix.fromArray(De.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(De.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ee===0&&(T.matrix.copy(we.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ye===!0&&T.cameras.push(we)}}for(let ce=0;ce<g.length;ce++){const ye=_[ce],Ee=g[ce];ye!==null&&Ee!==void 0&&Ee.update(ye,Z,c||o)}W&&W(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),y=null}const Q=new o0;Q.setAnimationLoop(Y),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}}function fR(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,i0(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),y(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dR(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=r[g.id];S===void 0&&(y(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const L=_.program;i.updateUBOMapping(g,L);const P=e.render.frame;s[g.id]!==P&&(h(g),s[g.id]=P)}function u(g){const _=d();g.__bindingPointIndex=_;const S=n.createBuffer(),L=g.__size,P=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],S=g.uniforms,L=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let P=0,b=S.length;P<b;P++){const k=Array.isArray(S[P])?S[P]:[S[P]];for(let T=0,C=k.length;T<C;T++){const V=k[T];if(p(V,P,T,L)===!0){const j=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let I=0;for(let z=0;z<J.length;z++){const $=J[z],K=v($);typeof $=="number"||typeof $=="boolean"?(V.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,j+I,V.__data)):$.isMatrix3?(V.__data[0]=$.elements[0],V.__data[1]=$.elements[1],V.__data[2]=$.elements[2],V.__data[3]=0,V.__data[4]=$.elements[3],V.__data[5]=$.elements[4],V.__data[6]=$.elements[5],V.__data[7]=0,V.__data[8]=$.elements[6],V.__data[9]=$.elements[7],V.__data[10]=$.elements[8],V.__data[11]=0):($.toArray(V.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,_,S,L){const P=g.value,b=_+"_"+S;if(L[b]===void 0)return typeof P=="number"||typeof P=="boolean"?L[b]=P:L[b]=P.clone(),!0;{const k=L[b];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return L[b]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function y(g){const _=g.uniforms;let S=0;const L=16;for(let b=0,k=_.length;b<k;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let C=0,V=T.length;C<V;C++){const j=T[C],J=Array.isArray(j.value)?j.value:[j.value];for(let I=0,z=J.length;I<z;I++){const $=J[I],K=v($),U=S%L;U!==0&&L-U<K.boundary&&(S+=L-U),j.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=K.storage}}}const P=S%L;return P>0&&(S+=L-P),g.__size=S,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class p0{constructor(e={}){const{canvas:t=lE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),y=new Int32Array(4);let v=null,m=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const _=this;let S=!1,L=0,P=0,b=null,k=-1,T=null;const C=new Lt,V=new Lt;let j=null;const J=new Je(0);let I=0,z=t.width,$=t.height,K=1,U=null,B=null;const W=new Lt(0,0,z,$),Y=new Lt(0,0,z,$);let Q=!1;const X=new kd;let Z=!1,ce=!1,ye=null;const Ee=new Rt,De=new Ye,Ne=new F,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return b===null?K:1}let G=i;function It(R,N){for(let x=0;x<R.length;x++){const M=R[x],w=t.getContext(M,N);if(w!==null)return w}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dd}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ue,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),G=It(N,R),G===null)throw It(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Re,Ie,Te,ot,Ue,A,E,H,ne,te,re,Me,le,_e,be,ke,ee,qe,Be,Le,Ce,xe,Fe,Ke;function lt(){Re=new EC(G),Ie=new gC(G,Re,e),Re.init(Ie),xe=new aR(G,Re,Ie),Te=new sR(G,Re,Ie),ot=new CC(G),Ue=new X1,A=new oR(G,Re,Te,Ue,Ie,xe,ot),E=new vC(_),H=new SC(_),ne=new IE(G,Ie),Fe=new pC(G,Re,ne,Ie),te=new MC(G,ne,ot,Fe),re=new bC(G,te,ne,ot),Be=new wC(G,Ie,A),ke=new _C(Ue),Me=new W1(_,E,H,Re,Ie,Fe,ke),le=new fR(_,Ue),_e=new $1,be=new J1(Re,Ie),qe=new hC(_,E,H,Te,re,h,l),ee=new rR(_,re,Ie),Ke=new dR(G,ot,Ie,Te),Le=new mC(G,Re,ot,Ie),Ce=new TC(G,Re,ot,Ie),ot.programs=Me.programs,_.capabilities=Ie,_.extensions=Re,_.properties=Ue,_.renderLists=_e,_.shadowMap=ee,_.state=Te,_.info=ot}lt();const Ge=new uR(_,G);this.xr=Ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(z,$,!1))},this.getSize=function(R){return R.set(z,$)},this.setSize=function(R,N,x=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,$=N,t.width=Math.floor(R*K),t.height=Math.floor(N*K),x===!0&&(t.style.width=R+"px",t.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(z*K,$*K).floor()},this.setDrawingBufferSize=function(R,N,x){z=R,$=N,K=x,t.width=Math.floor(R*x),t.height=Math.floor(N*x),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,N,x,M){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,N,x,M),Te.viewport(C.copy(W).multiplyScalar(K).floor())},this.getScissor=function(R){return R.copy(Y)},this.setScissor=function(R,N,x,M){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,N,x,M),Te.scissor(V.copy(Y).multiplyScalar(K).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){Te.setScissorTest(Q=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(R=!0,N=!0,x=!0){let M=0;if(R){let w=!1;if(b!==null){const O=b.texture.format;w=O===Vv||O===Hv||O===Gv}if(w){const O=b.texture.type,q=O===Ki||O===ki||O===Id||O===Tr||O===zv||O===Bv,se=qe.getClearColor(),de=qe.getClearAlpha(),pe=se.r,ve=se.g,he=se.b;q?(p[0]=pe,p[1]=ve,p[2]=he,p[3]=de,G.clearBufferuiv(G.COLOR,0,p)):(y[0]=pe,y[1]=ve,y[2]=he,y[3]=de,G.clearBufferiv(G.COLOR,0,y))}else M|=G.COLOR_BUFFER_BIT}N&&(M|=G.DEPTH_BUFFER_BIT),x&&(M|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(M)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),_e.dispose(),be.dispose(),Ue.dispose(),E.dispose(),H.dispose(),re.dispose(),Fe.dispose(),Ke.dispose(),Me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Ut),Ge.removeEventListener("sessionend",tt),ye&&(ye.dispose(),ye=null),Nt.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=ot.autoReset,N=ee.enabled,x=ee.autoUpdate,M=ee.needsUpdate,w=ee.type;lt(),ot.autoReset=R,ee.enabled=N,ee.autoUpdate=x,ee.needsUpdate=M,ee.type=w}function ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){const N=R.target;N.removeEventListener("dispose",fe),Pe(N)}function Pe(R){Ae(R),Ue.remove(R)}function Ae(R){const N=Ue.get(R).programs;N!==void 0&&(N.forEach(function(x){Me.releaseProgram(x)}),R.isShaderMaterial&&Me.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,x,M,w,O){N===null&&(N=we);const q=w.isMesh&&w.matrixWorld.determinant()<0,se=Ws(R,N,x,M,w);Te.setMaterial(M,q);let de=x.index,pe=1;if(M.wireframe===!0){if(de=te.getWireframeAttribute(x),de===void 0)return;pe=2}const ve=x.drawRange,he=x.attributes.position;let Ve=ve.start*pe,Ze=(ve.start+ve.count)*pe;O!==null&&(Ve=Math.max(Ve,O.start*pe),Ze=Math.min(Ze,(O.start+O.count)*pe)),de!==null?(Ve=Math.max(Ve,0),Ze=Math.min(Ze,de.count)):he!=null&&(Ve=Math.max(Ve,0),Ze=Math.min(Ze,he.count));const Qe=Ze-Ve;if(Qe<0||Qe===1/0)return;Fe.setup(w,M,se,x,de);let xt,et=Le;if(de!==null&&(xt=ne.get(de),et=Ce,et.setIndex(xt)),w.isMesh)M.wireframe===!0?(Te.setLineWidth(M.wireframeLinewidth*ze()),et.setMode(G.LINES)):et.setMode(G.TRIANGLES);else if(w.isLine){let Oe=M.linewidth;Oe===void 0&&(Oe=1),Te.setLineWidth(Oe*ze()),w.isLineSegments?et.setMode(G.LINES):w.isLineLoop?et.setMode(G.LINE_LOOP):et.setMode(G.LINE_STRIP)}else w.isPoints?et.setMode(G.POINTS):w.isSprite&&et.setMode(G.TRIANGLES);if(w.isBatchedMesh)et.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else if(w.isInstancedMesh)et.renderInstances(Ve,Qe,w.count);else if(x.isInstancedBufferGeometry){const Oe=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,Br=Math.min(x.instanceCount,Oe);et.renderInstances(Ve,Qe,Br)}else et.render(Ve,Qe)};function it(R,N,x){R.transparent===!0&&R.side===fi&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,rr(R,N,x),R.side=er,R.needsUpdate=!0,rr(R,N,x),R.side=fi):rr(R,N,x)}this.compile=function(R,N,x=null){x===null&&(x=R),m=be.get(x),m.init(),g.push(m),x.traverseVisible(function(w){w.isLight&&w.layers.test(N.layers)&&(m.pushLight(w),w.castShadow&&m.pushShadow(w))}),R!==x&&R.traverseVisible(function(w){w.isLight&&w.layers.test(N.layers)&&(m.pushLight(w),w.castShadow&&m.pushShadow(w))}),m.setupLights(_._useLegacyLights);const M=new Set;return R.traverse(function(w){const O=w.material;if(O)if(Array.isArray(O))for(let q=0;q<O.length;q++){const se=O[q];it(se,x,w),M.add(se)}else it(O,x,w),M.add(O)}),g.pop(),m=null,M},this.compileAsync=function(R,N,x=null){const M=this.compile(R,N,x);return new Promise(w=>{function O(){if(M.forEach(function(q){Ue.get(q).currentProgram.isReady()&&M.delete(q)}),M.size===0){w(R);return}setTimeout(O,10)}Re.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let je=null;function yt(R){je&&je(R)}function Ut(){Nt.stop()}function tt(){Nt.start()}const Nt=new o0;Nt.setAnimationLoop(yt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(R){je=R,Ge.setAnimationLoop(R),R===null?Nt.stop():Nt.start()},Ge.addEventListener("sessionstart",Ut),Ge.addEventListener("sessionend",tt),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(N),N=Ge.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,N,b),m=be.get(R,g.length),m.init(),g.push(m),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Ee),ce=this.localClippingEnabled,Z=ke.init(this.clippingPlanes,ce),v=_e.get(R,f.length),v.init(),f.push(v),Tn(R,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(U,B),this.info.render.frame++,Z===!0&&ke.beginShadows();const x=m.state.shadowsArray;if(ee.render(x,R,N),Z===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(v,R),m.setupLights(_._useLegacyLights),N.isArrayCamera){const M=N.cameras;for(let w=0,O=M.length;w<O;w++){const q=M[w];Jo(v,R,q,q.viewport)}}else Jo(v,R,N);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,N),Fe.resetDefaultState(),k=-1,T=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Tn(R,N,x,M){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)x=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){M&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const q=re.update(R),se=R.material;se.visible&&v.push(R,q,se,x,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const q=re.update(R),se=R.material;if(M&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),Ne.copy(q.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(se)){const de=q.groups;for(let pe=0,ve=de.length;pe<ve;pe++){const he=de[pe],Ve=se[he.materialIndex];Ve&&Ve.visible&&v.push(R,q,Ve,x,Ne.z,he)}}else se.visible&&v.push(R,q,se,x,Ne.z,null)}}const O=R.children;for(let q=0,se=O.length;q<se;q++)Tn(O[q],N,x,M)}function Jo(R,N,x,M){const w=R.opaque,O=R.transmissive,q=R.transparent;m.setupLightsView(x),Z===!0&&ke.setGlobalState(_.clippingPlanes,x),O.length>0&&ea(w,O,N,x),M&&Te.viewport(C.copy(M)),w.length>0&&zr(w,N,x),O.length>0&&zr(O,N,x),q.length>0&&zr(q,N,x),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ea(R,N,x,M){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;const O=Ie.isWebGL2;ye===null&&(ye=new Dr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Wo:Ki,minFilter:Vo,samples:O?4:0})),_.getDrawingBufferSize(De),O?ye.setSize(De.x,De.y):ye.setSize(Af(De.x),Af(De.y));const q=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(J),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const se=_.toneMapping;_.toneMapping=qi,zr(R,x,M),A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye);let de=!1;for(let pe=0,ve=N.length;pe<ve;pe++){const he=N[pe],Ve=he.object,Ze=he.geometry,Qe=he.material,xt=he.group;if(Qe.side===fi&&Ve.layers.test(M.layers)){const et=Qe.side;Qe.side=hn,Qe.needsUpdate=!0,ta(Ve,x,M,Ze,Qe,xt),Qe.side=et,Qe.needsUpdate=!0,de=!0}}de===!0&&(A.updateMultisampleRenderTarget(ye),A.updateRenderTargetMipmap(ye)),_.setRenderTarget(q),_.setClearColor(J,I),_.toneMapping=se}function zr(R,N,x){const M=N.isScene===!0?N.overrideMaterial:null;for(let w=0,O=R.length;w<O;w++){const q=R[w],se=q.object,de=q.geometry,pe=M===null?q.material:M,ve=q.group;se.layers.test(x.layers)&&ta(se,N,x,de,pe,ve)}}function ta(R,N,x,M,w,O){R.onBeforeRender(_,N,x,M,w,O),R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),w.onBeforeRender(_,N,x,M,R,O),w.transparent===!0&&w.side===fi&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,_.renderBufferDirect(x,N,M,w,R,O),w.side=er,w.needsUpdate=!0,_.renderBufferDirect(x,N,M,w,R,O),w.side=fi):_.renderBufferDirect(x,N,M,w,R,O),R.onAfterRender(_,N,x,M,w,O)}function rr(R,N,x){N.isScene!==!0&&(N=we);const M=Ue.get(R),w=m.state.lights,O=m.state.shadowsArray,q=w.state.version,se=Me.getParameters(R,w.state,O,N,x),de=Me.getProgramCacheKey(se);let pe=M.programs;M.environment=R.isMeshStandardMaterial?N.environment:null,M.fog=N.fog,M.envMap=(R.isMeshStandardMaterial?H:E).get(R.envMap||M.environment),pe===void 0&&(R.addEventListener("dispose",fe),pe=new Map,M.programs=pe);let ve=pe.get(de);if(ve!==void 0){if(M.currentProgram===ve&&M.lightsStateVersion===q)return qn(R,se),ve}else se.uniforms=Me.getUniforms(R),R.onBuild(x,se,_),R.onBeforeCompile(se,_),ve=Me.acquireProgram(se,de),pe.set(de,ve),M.uniforms=se.uniforms;const he=M.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(he.clippingPlanes=ke.uniform),qn(R,se),M.needsLights=ac(R),M.lightsStateVersion=q,M.needsLights&&(he.ambientLightColor.value=w.state.ambient,he.lightProbe.value=w.state.probe,he.directionalLights.value=w.state.directional,he.directionalLightShadows.value=w.state.directionalShadow,he.spotLights.value=w.state.spot,he.spotLightShadows.value=w.state.spotShadow,he.rectAreaLights.value=w.state.rectArea,he.ltc_1.value=w.state.rectAreaLTC1,he.ltc_2.value=w.state.rectAreaLTC2,he.pointLights.value=w.state.point,he.pointLightShadows.value=w.state.pointShadow,he.hemisphereLights.value=w.state.hemi,he.directionalShadowMap.value=w.state.directionalShadowMap,he.directionalShadowMatrix.value=w.state.directionalShadowMatrix,he.spotShadowMap.value=w.state.spotShadowMap,he.spotLightMatrix.value=w.state.spotLightMatrix,he.spotLightMap.value=w.state.spotLightMap,he.pointShadowMap.value=w.state.pointShadowMap,he.pointShadowMatrix.value=w.state.pointShadowMatrix),M.currentProgram=ve,M.uniformsList=null,ve}function na(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=al.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function qn(R,N){const x=Ue.get(R);x.outputColorSpace=N.outputColorSpace,x.batching=N.batching,x.instancing=N.instancing,x.instancingColor=N.instancingColor,x.skinning=N.skinning,x.morphTargets=N.morphTargets,x.morphNormals=N.morphNormals,x.morphColors=N.morphColors,x.morphTargetsCount=N.morphTargetsCount,x.numClippingPlanes=N.numClippingPlanes,x.numIntersection=N.numClipIntersection,x.vertexAlphas=N.vertexAlphas,x.vertexTangents=N.vertexTangents,x.toneMapping=N.toneMapping}function Ws(R,N,x,M,w){N.isScene!==!0&&(N=we),A.resetTextureUnits();const O=N.fog,q=M.isMeshStandardMaterial?N.environment:null,se=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Si,de=(M.isMeshStandardMaterial?H:E).get(M.envMap||q),pe=M.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,ve=!!x.attributes.tangent&&(!!M.normalMap||M.anisotropy>0),he=!!x.morphAttributes.position,Ve=!!x.morphAttributes.normal,Ze=!!x.morphAttributes.color;let Qe=qi;M.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Qe=_.toneMapping);const xt=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,et=xt!==void 0?xt.length:0,Oe=Ue.get(M),Br=m.state.lights;if(Z===!0&&(ce===!0||R!==T)){const Cn=R===T&&M.id===k;ke.setState(M,R,Cn)}let ct=!1;M.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Br.state.version||Oe.outputColorSpace!==se||w.isBatchedMesh&&Oe.batching===!1||!w.isBatchedMesh&&Oe.batching===!0||w.isInstancedMesh&&Oe.instancing===!1||!w.isInstancedMesh&&Oe.instancing===!0||w.isSkinnedMesh&&Oe.skinning===!1||!w.isSkinnedMesh&&Oe.skinning===!0||w.isInstancedMesh&&Oe.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&Oe.instancingColor===!1&&w.instanceColor!==null||Oe.envMap!==de||M.fog===!0&&Oe.fog!==O||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ke.numPlanes||Oe.numIntersection!==ke.numIntersection)||Oe.vertexAlphas!==pe||Oe.vertexTangents!==ve||Oe.morphTargets!==he||Oe.morphNormals!==Ve||Oe.morphColors!==Ze||Oe.toneMapping!==Qe||Ie.isWebGL2===!0&&Oe.morphTargetsCount!==et)&&(ct=!0):(ct=!0,Oe.__version=M.version);let sr=Oe.currentProgram;ct===!0&&(sr=rr(M,N,w));let Hd=!1,Xs=!1,lc=!1;const Bt=sr.getUniforms(),or=Oe.uniforms;if(Te.useProgram(sr.program)&&(Hd=!0,Xs=!0,lc=!0),M.id!==k&&(k=M.id,Xs=!0),Hd||T!==R){Bt.setValue(G,"projectionMatrix",R.projectionMatrix),Bt.setValue(G,"viewMatrix",R.matrixWorldInverse);const Cn=Bt.map.cameraPosition;Cn!==void 0&&Cn.setValue(G,Ne.setFromMatrixPosition(R.matrixWorld)),Ie.logarithmicDepthBuffer&&Bt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(M.isMeshPhongMaterial||M.isMeshToonMaterial||M.isMeshLambertMaterial||M.isMeshBasicMaterial||M.isMeshStandardMaterial||M.isShaderMaterial)&&Bt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Xs=!0,lc=!0)}if(w.isSkinnedMesh){Bt.setOptional(G,w,"bindMatrix"),Bt.setOptional(G,w,"bindMatrixInverse");const Cn=w.skeleton;Cn&&(Ie.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Bt.setValue(G,"boneTexture",Cn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}w.isBatchedMesh&&(Bt.setOptional(G,w,"batchingTexture"),Bt.setValue(G,"batchingTexture",w._matricesTexture,A));const cc=x.morphAttributes;if((cc.position!==void 0||cc.normal!==void 0||cc.color!==void 0&&Ie.isWebGL2===!0)&&Be.update(w,x,sr),(Xs||Oe.receiveShadow!==w.receiveShadow)&&(Oe.receiveShadow=w.receiveShadow,Bt.setValue(G,"receiveShadow",w.receiveShadow)),M.isMeshGouraudMaterial&&M.envMap!==null&&(or.envMap.value=de,or.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),Xs&&(Bt.setValue(G,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&oc(or,lc),O&&M.fog===!0&&le.refreshFogUniforms(or,O),le.refreshMaterialUniforms(or,M,K,$,ye),al.upload(G,na(Oe),or,A)),M.isShaderMaterial&&M.uniformsNeedUpdate===!0&&(al.upload(G,na(Oe),or,A),M.uniformsNeedUpdate=!1),M.isSpriteMaterial&&Bt.setValue(G,"center",w.center),Bt.setValue(G,"modelViewMatrix",w.modelViewMatrix),Bt.setValue(G,"normalMatrix",w.normalMatrix),Bt.setValue(G,"modelMatrix",w.matrixWorld),M.isShaderMaterial||M.isRawShaderMaterial){const Cn=M.uniformsGroups;for(let uc=0,g0=Cn.length;uc<g0;uc++)if(Ie.isWebGL2){const Vd=Cn[uc];Ke.update(Vd,sr),Ke.bind(Vd,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function oc(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function ac(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,N,x){Ue.get(R.texture).__webglTexture=N,Ue.get(R.depthTexture).__webglTexture=x;const M=Ue.get(R);M.__hasExternalTextures=!0,M.__hasExternalTextures&&(M.__autoAllocateDepthBuffer=x===void 0,M.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),M.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,N){const x=Ue.get(R);x.__webglFramebuffer=N,x.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,x=0){b=R,L=N,P=x;let M=!0,w=null,O=!1,q=!1;if(R){const de=Ue.get(R);de.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(G.FRAMEBUFFER,null),M=!1):de.__webglFramebuffer===void 0?A.setupRenderTarget(R):de.__hasExternalTextures&&A.rebindTextures(R,Ue.get(R.texture).__webglTexture,Ue.get(R.depthTexture).__webglTexture);const pe=R.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(q=!0);const ve=Ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ve[N])?w=ve[N][x]:w=ve[N],O=!0):Ie.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?w=Ue.get(R).__webglMultisampledFramebuffer:Array.isArray(ve)?w=ve[x]:w=ve,C.copy(R.viewport),V.copy(R.scissor),j=R.scissorTest}else C.copy(W).multiplyScalar(K).floor(),V.copy(Y).multiplyScalar(K).floor(),j=Q;if(Te.bindFramebuffer(G.FRAMEBUFFER,w)&&Ie.drawBuffers&&M&&Te.drawBuffers(R,w),Te.viewport(C),Te.scissor(V),Te.setScissorTest(j),O){const de=Ue.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,x)}else if(q){const de=Ue.get(R.texture),pe=N||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,de.__webglTexture,x||0,pe)}k=-1},this.readRenderTargetPixels=function(R,N,x,M,w,O,q){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&q!==void 0&&(se=se[q]),se){Te.bindFramebuffer(G.FRAMEBUFFER,se);try{const de=R.texture,pe=de.format,ve=de.type;if(pe!==Xn&&xe.convert(pe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const he=ve===Wo&&(Re.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Re.has("EXT_color_buffer_float"));if(ve!==Ki&&xe.convert(ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ve===Fi&&(Ie.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!he){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-M&&x>=0&&x<=R.height-w&&G.readPixels(N,x,M,w,xe.convert(pe),xe.convert(ve),O)}finally{const de=b!==null?Ue.get(b).__webglFramebuffer:null;Te.bindFramebuffer(G.FRAMEBUFFER,de)}}},this.copyFramebufferToTexture=function(R,N,x=0){const M=Math.pow(2,-x),w=Math.floor(N.image.width*M),O=Math.floor(N.image.height*M);A.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,x,0,0,R.x,R.y,w,O),Te.unbindTexture()},this.copyTextureToTexture=function(R,N,x,M=0){const w=N.image.width,O=N.image.height,q=xe.convert(x.format),se=xe.convert(x.type);A.setTexture2D(x,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,x.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,x.unpackAlignment),N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,M,R.x,R.y,w,O,q,se,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,M,R.x,R.y,N.mipmaps[0].width,N.mipmaps[0].height,q,N.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,M,R.x,R.y,q,se,N.image),M===0&&x.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(R,N,x,M,w=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const O=R.max.x-R.min.x+1,q=R.max.y-R.min.y+1,se=R.max.z-R.min.z+1,de=xe.convert(M.format),pe=xe.convert(M.type);let ve;if(M.isData3DTexture)A.setTexture3D(M,0),ve=G.TEXTURE_3D;else if(M.isDataArrayTexture||M.isCompressedArrayTexture)A.setTexture2DArray(M,0),ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,M.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,M.unpackAlignment);const he=G.getParameter(G.UNPACK_ROW_LENGTH),Ve=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ze=G.getParameter(G.UNPACK_SKIP_PIXELS),Qe=G.getParameter(G.UNPACK_SKIP_ROWS),xt=G.getParameter(G.UNPACK_SKIP_IMAGES),et=x.isCompressedTexture?x.mipmaps[w]:x.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,et.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,et.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,R.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,R.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,R.min.z),x.isDataTexture||x.isData3DTexture?G.texSubImage3D(ve,w,N.x,N.y,N.z,O,q,se,de,pe,et.data):x.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ve,w,N.x,N.y,N.z,O,q,se,de,et.data)):G.texSubImage3D(ve,w,N.x,N.y,N.z,O,q,se,de,pe,et),G.pixelStorei(G.UNPACK_ROW_LENGTH,he),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ve),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ze),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,xt),w===0&&M.generateMipmaps&&G.generateMipmap(ve),Te.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){L=0,P=0,b=null,Te.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ud?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===ic?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Rr:Xv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rr?kt:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hR extends p0{}hR.prototype.isWebGL1Renderer=!0;class pR extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mR extends pn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bd extends Mi{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let y=0;const v=[],m=i/2;let f=0;g(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new xn(d,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(p,2));function g(){const S=new F,L=new F;let P=0;const b=(t-e)/i;for(let k=0;k<=s;k++){const T=[],C=k/s,V=C*(t-e)+e;for(let j=0;j<=r;j++){const J=j/r,I=J*l+a,z=Math.sin(I),$=Math.cos(I);L.x=V*z,L.y=-C*i+m,L.z=V*$,d.push(L.x,L.y,L.z),S.set(z,b,$).normalize(),h.push(S.x,S.y,S.z),p.push(J,1-C),T.push(y++)}v.push(T)}for(let k=0;k<r;k++)for(let T=0;T<s;T++){const C=v[T][k],V=v[T+1][k],j=v[T+1][k+1],J=v[T][k+1];u.push(C,V,J),u.push(V,j,J),P+=6}c.addGroup(f,P,0),f+=P}function _(S){const L=y,P=new Ye,b=new F;let k=0;const T=S===!0?e:t,C=S===!0?1:-1;for(let j=1;j<=r;j++)d.push(0,m*C,0),h.push(0,C,0),p.push(.5,.5),y++;const V=y;for(let j=0;j<=r;j++){const I=j/r*l+a,z=Math.cos(I),$=Math.sin(I);b.x=T*$,b.y=m*C,b.z=T*z,d.push(b.x,b.y,b.z),h.push(0,C,0),P.x=z*.5+.5,P.y=$*.5*C+.5,p.push(P.x,P.y),y++}for(let j=0;j<r;j++){const J=L+j,I=V+j;S===!0?u.push(I,I+1,J):u.push(I+1,I,J),k+=3}c.addGroup(f,k,S===!0?1:2),f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gd extends Mi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new F,h=new F,p=[],y=[],v=[],m=[];for(let f=0;f<=i;f++){const g=[],_=f/i;let S=0;f===0&&o===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){const P=L/t;d.x=-e*Math.cos(r+P*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+P*s)*Math.sin(o+_*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(P+S,1-_),g.push(c++)}u.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const _=u[f][g+1],S=u[f][g],L=u[f+1][g],P=u[f+1][g+1];(f!==0||o>0)&&p.push(_,S,P),(f!==i-1||l<Math.PI)&&p.push(S,L,P)}this.setIndex(p),this.setAttribute("position",new xn(y,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fr extends Qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jv,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m0 extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const gu=new Rt,wm=new F,bm=new F;class gR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(wm),bm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bm),t.updateMatrixWorld(),gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _R extends gR{constructor(){super(new a0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends m0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new _R}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vR extends m0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yR{constructor(e,t,i=0,r=1/0){this.ray=new Qv(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Od,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return bf(e,this,i,t),i.sort(Lm),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)bf(e[r],this,i,t);return i.sort(Lm),i}}function Lm(n,e){return n.distance-e.distance}function bf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)bf(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);const Dm=["red","blue","yellow","green"],Ha=new Set([0,10,20,30]),Im=[0,10,20,30],xR=5,_u=["badword","hate","racist","stupid","idiot"],Um="badWordsCacheV1",SR=1e3*60*60*24*7,ER="/bad-words-en.txt";function MR(n){return n?typeof structuredClone=="function"?structuredClone(n):JSON.parse(JSON.stringify(n)):null}function TR(){const n=rt.useRef(null),e=rt.useRef(null),t=rt.useRef({peer:null,isHost:!1,connections:new Map,selfId:null,selfName:"",assignedIndex:null,roomId:null,game:null,board:{trackPositions:[],homeStretchPositions:[[],[],[],[]],homeSlots:[[],[],[],[]],waitingSlots:[[],[],[],[]]},three:{renderer:null,scene:null,camera:null,boardGroup:null,tokensGroup:null,tokenMeshes:[],diceMesh:null,diceRoll:null,raycaster:null,pointer:null,canvas:null,animationId:null,zoom:1},mediaStream:null,mediaConnections:new Map,speechRecognition:null,speechRecognizing:!1,badWordsSet:new Set(_u),advanceTimeout:null}),[i,r]=rt.useState("Disconnected"),[s,o]=rt.useState(null),[a,l]=rt.useState(null),[c,u]=rt.useState("–"),[d,h]=rt.useState("Waiting for host…"),[p,y]=rt.useState(""),[v,m]=rt.useState(""),[f,g]=rt.useState(!1),[_,S]=rt.useState([]),[L,P]=rt.useState(""),[b,k]=rt.useState(!1),[T,C]=rt.useState(""),[V,j]=rt.useState(!0),[J,I]=rt.useState(!1),[z,$]=rt.useState(()=>{try{const x=localStorage.getItem("rooms");return x?JSON.parse(x):[]}catch{return[]}}),K=rt.useRef(null),U=rt.useRef(!1),B=rt.useRef(null),W=rt.useMemo(()=>!s||a===null?!1:s.started&&s.turnIndex===a,[s,a]),Y=rt.useMemo(()=>!!(s&&a!==null),[s,a]);rt.useMemo(()=>i.startsWith("Connected"),[i]),rt.useEffect(()=>{const x=e.current,M=n.current;if(!x||!M)return;t.current.three.canvas=M,Be(),Le();const w=()=>{Be(),Ce(),D()};window.addEventListener("resize",w),Z();const O=window.matchMedia("(max-width: 900px)"),q=()=>{U.current=O.matches,O.matches&&(I(!0),document.querySelectorAll("audio").forEach(se=>{se.muted=!0}))};return q(),O.addEventListener("change",q),()=>{window.removeEventListener("resize",w),O.removeEventListener("change",q),xe(),De()}},[]),rt.useEffect(()=>{if(!s){u("–"),h("Waiting for host…");return}u(s.dice||"–");const x=s.players[s.turnIndex];h(s.started?`${x.name}'s turn`:s.message),D(),s.dice&&s.rollId!==B.current&&Pe(s.dice,s.rollId),B.current=s.rollId},[s,a]);function Q(x,M=a){t.current.game=x,t.current.assignedIndex=M,o(MR(x)),l(M),t.current.three.diceMesh&&(t.current.three.diceMesh.visible=!!(x&&x.started))}function X(x){const w=[...new Set(x)].slice(0,xR);$(w);try{localStorage.setItem("rooms",JSON.stringify(w))}catch{}}async function Z(){try{const x=localStorage.getItem(Um);if(x){const M=JSON.parse(x);if(Date.now()-M.timestamp<SR){t.current.badWordsSet=new Set(M.words);return}}}catch{}try{const M=(await fetch(ER).then(w=>w.text())).split(/\r?\n/).map(w=>w.trim()).filter(Boolean).map(w=>w.toLowerCase());t.current.badWordsSet=new Set(M),localStorage.setItem(Um,JSON.stringify({timestamp:Date.now(),words:M}))}catch{t.current.badWordsSet=new Set(_u)}}function ce(x){return{started:!1,players:x,turnIndex:0,dice:null,rollId:0,message:"Waiting to start"}}function ye(x){return[{id:t.current.selfId,name:x||"Host",color:Dm[0],tokens:[-1,-1,-1,-1],connected:!0}]}function Ee(x){const M=x?new ap(x):new ap;M.on("open",w=>{t.current.selfId=w,r(`Connected (${w})`),t.current.isHost&&(m(w),g(!0),z.includes(w)||X([...z,w]))}),M.on("connection",w=>Ne(w)),M.on("call",w=>{t.current.mediaStream?w.answer(t.current.mediaStream):w.answer(),w.on("stream",O=>Ws(w.peer,O)),t.current.mediaConnections.set(w.peer,w)}),M.on("error",()=>{r("Peer error")}),t.current.peer=M}function De(){const{peer:x}=t.current;x&&x.destroy(),t.current.peer=null}function Ne(x){x.on("data",M=>G(x,M)),x.on("open",()=>{if(t.current.connections.set(x.peer,x),t.current.isHost&&x.send({type:"hello",name:t.current.selfName,host:!0}),t.current.mediaStream){const M=t.current.peer.call(x.peer,t.current.mediaStream);M.on("stream",w=>Ws(x.peer,w)),t.current.mediaConnections.set(x.peer,M)}}),x.on("close",()=>{t.current.connections.delete(x.peer),t.current.isHost&&Re(x.peer)})}function we(x){if(!t.current.peer||t.current.isHost)return;const M=t.current.connections.get(t.current.roomId);M&&M.open&&M.send(x)}function ze(){const x=t.current.game;x.players.forEach(M=>{if(M.id===t.current.selfId)return;const w=t.current.connections.get(M.id);w&&w.open&&w.send({type:"state",state:x,assignedIndex:x.players.findIndex(O=>O.id===M.id)})}),Q(x,t.current.isHost?0:t.current.assignedIndex)}function G(x,M){if(!(!M||typeof M!="object")){if(M.type==="hello"&&!t.current.isHost){r(`Connected to ${x.peer}`);return}t.current.isHost?(M.type==="join"&&It(x,M.name),M.type==="action"&&Ie(M.action,M.payload,x.peer),M.type==="chat"&&Te(M,x.peer)):M.type==="state"?Q(M.state,M.assignedIndex):M.type==="chat"&&Ue(M.name,M.text,M.from)}}function It(x,M){if(t.current.game||(t.current.game=ce(ye(t.current.selfName))),t.current.game.players.length>=4){x.send({type:"state",state:t.current.game,assignedIndex:null});return}const w=t.current.game.players.length;t.current.game.players.push({id:x.peer,name:M||`Player ${w+1}`,color:Dm[w],tokens:[-1,-1,-1,-1],connected:!0}),x.send({type:"state",state:t.current.game,assignedIndex:w}),ze()}function Re(x){const M=t.current.game;if(!M)return;const w=M.players.find(O=>O.id===x);w&&(w.connected=!1),ze()}function Ie(x,M,w){if(!t.current.game)return;const O=t.current.game.players.findIndex(q=>q.id===w);if(O===t.current.game.turnIndex&&(x==="roll"&&(t.current.game.started||qe(),E()),x==="move")){if(!t.current.game.started)return;ne(O,M.tokenIndex)}}function Te(x,M){const w=x.text||"";if(!A(w)){const O=t.current.connections.get(M);O&&O.open&&O.send({type:"chat",name:"System",text:"Message blocked by safety filter.",from:"system"});return}Ue(x.name,w,M),ot(x.name,w,M)}function ot(x,M,w){t.current.connections.forEach(O=>{O.open&&O.send({type:"chat",name:x,text:M,from:w})})}function Ue(x,M,w){S(O=>[...O.slice(-60),{id:`${Date.now()}-${Math.random()}`,name:x,text:M,from:w}])}function A(x){const M=x.toLowerCase(),w=t.current.badWordsSet||new Set(_u);for(const O of w)if(O&&M.includes(O))return!1;return!0}function E(){const x=t.current.game;if(!x||x.dice!==null)return;x.dice=Math.floor(Math.random()*6)+1,x.rollId=(x.rollId||0)+1,x.message=`Rolled ${x.dice}`,Me(x.turnIndex,x.dice).length===0&&(t.current.advanceTimeout&&clearTimeout(t.current.advanceTimeout),t.current.advanceTimeout=window.setTimeout(()=>{H(),ze(),t.current.advanceTimeout=null},900)),ze()}function H(x=!1){const M=t.current.game;M&&(x||(M.turnIndex=(M.turnIndex+1)%M.players.length),M.dice=null,M.message="Next turn")}function ne(x,M){const w=t.current.game;if(!w)return;const O=w.dice;if(!O||!Me(x,O).includes(M))return;const se=w.players[x],de=se.tokens[M],pe=re(x,de,O);if(pe!==null){if(pe.kind==="track"){const ve=le(x,pe.value),he=_e(ve);he&&!Ha.has(ve)&&(w.players[he.playerIndex].tokens[he.tokenIndex]=-1),se.tokens[M]=pe.value}else se.tokens[M]=40+pe.value;te(se)?(w.message=`${se.name} wins!`,w.started=!1):H(O===6),ze()}}function te(x){return x.tokens.every(M=>M>=43)}function re(x,M,w){if(!t.current.game)return null;if(M===-1){if(w!==6)return null;const q=Im[x];return be(x,q)||Ha.has(q)&&ke(q)?null:{kind:"track",value:0}}if(M>=0&&M<=39){const q=M+w;if(q<=39){const de=le(x,q);return be(x,de)||Ha.has(de)&&ke(de)?null:{kind:"track",value:q}}const se=q-40;return se>3||ee(x,se)?null:{kind:"home",value:se}}if(M>=40&&M<=43){const se=M-40+w;return se>3||ee(x,se)?null:{kind:"home",value:se}}return null}function Me(x,M){const w=t.current.game;if(!w)return[];const O=w.players[x],q=[];return O.tokens.forEach((se,de)=>{re(x,se,M)&&q.push(de)}),q}function le(x,M){return(Im[x]+M)%40}function _e(x){const M=t.current.game;if(!M)return null;for(let w=0;w<M.players.length;w+=1){const O=M.players[w];for(let q=0;q<O.tokens.length;q+=1){const se=O.tokens[q];if(se>=0&&se<=39&&le(w,se)===x)return{playerIndex:w,tokenIndex:q}}}return null}function be(x,M){const w=_e(M);return w&&w.playerIndex===x}function ke(x){const M=_e(x);return M&&M.playerIndex!==null}function ee(x,M){const w=t.current.game;return w?w.players[x].tokens.some(O=>O===40+M):!1}function qe(){const x=t.current.game;x&&(x.started=!0,x.message="Game started",x.turnIndex=0,x.dice=null,t.current.three.diceMesh&&(t.current.three.diceMesh.visible=!0),ze())}function Be(){t.current.board.trackPositions=[],t.current.board.homeStretchPositions=[[],[],[],[]],t.current.board.homeSlots=[[],[],[],[]],t.current.board.waitingSlots=[[],[],[],[]];const x=48;for(let he=0;he<40;he+=1){const Ve=he/40*Math.PI*2-Math.PI/2;t.current.board.trackPositions.push(new F(Math.cos(Ve)*x,2.2,Math.sin(Ve)*x))}const M=[-Math.PI/2,0,Math.PI/2,Math.PI],w=[32,24,16,8];M.forEach((he,Ve)=>{t.current.board.homeStretchPositions[Ve]=w.map(Ze=>new F(Math.cos(he)*Ze,2.4,Math.sin(he)*Ze))});const O=62,q=7.5;[{x:-O,z:-O},{x:O,z:-O},{x:O,z:O},{x:-O,z:O}].forEach((he,Ve)=>{const Ze=[];for(let Qe=0;Qe<2;Qe+=1)for(let xt=0;xt<2;xt+=1)Ze.push(new F(he.x+(xt-.5)*q,2.4,he.z+(Qe-.5)*q));t.current.board.homeSlots[Ve]=Ze});const de=5.5,pe=70,ve=[{x:0,z:-pe,axis:"x"},{x:pe,z:0,axis:"z"},{x:0,z:pe,axis:"x"},{x:-pe,z:0,axis:"z"}];for(let he=0;he<4;he+=1){const Ve=[],Ze=ve[he];for(let Qe=0;Qe<4;Qe+=1){const xt=(Qe-1.5)*de,et=Ze.axis==="x"?Ze.x+xt:Ze.x,Oe=Ze.axis==="z"?Ze.z+xt:Ze.z;Ve.push(new F(et,2.4,Oe))}t.current.board.waitingSlots[he]=Ve}}function Le(){const x=t.current.three.canvas;if(x){if(!t.current.three.renderer){t.current.three.renderer=new p0({canvas:x,antialias:!0,alpha:!0}),t.current.three.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.current.three.scene=new pR,t.current.three.camera=new Pn(45,1,.1,1e3),t.current.three.camera.position.set(0,110,130),t.current.three.camera.lookAt(0,0,0);const M=new vR(16777215,.8),w=new Pm(16777215,.8);w.position.set(60,120,80);const O=new Pm(16773846,.6);O.position.set(-80,60,-100),t.current.three.scene.add(M,w,O),t.current.three.raycaster=new yR,t.current.three.pointer=new Ye,x.addEventListener("click",yt),x.addEventListener("wheel",Ut,{passive:!1})}Ce(),t.current.three.boardGroup&&t.current.three.scene.remove(t.current.three.boardGroup),t.current.three.boardGroup=Fe(),t.current.three.scene.add(t.current.three.boardGroup),t.current.three.diceMesh||(t.current.three.diceMesh=Ke(),t.current.three.scene.add(t.current.three.diceMesh)),t.current.three.animationId||lt()}}function Ce(){const x=t.current.three.canvas,M=e.current;if(!x||!M)return;const w=M.getBoundingClientRect();t.current.three.renderer.setSize(w.width,w.height,!1),t.current.three.camera.aspect=w.width/w.height,t.current.three.camera.updateProjectionMatrix()}function xe(){t.current.three.animationId&&cancelAnimationFrame(t.current.three.animationId)}function Fe(){const x=new vs,M=new mi(120,8,120),w=new fr({color:16049616,roughness:.7,metalness:.05}),O=new ln(M,w);O.position.y=-4,x.add(O);const q=new mi(108,2.8,108),se=new fr({color:16380390,roughness:.5,metalness:.05}),de=new ln(q,se);de.position.y=.6,x.add(de);const pe=new Bd(2.8,3.1,2.4,18),ve=new fr({color:16777215,roughness:.4,metalness:.1}),he=new fr({color:16046512,roughness:.4,metalness:.1,emissive:16762992,emissiveIntensity:.18});t.current.board.trackPositions.forEach((Qe,xt)=>{const et=new ln(pe,Ha.has(xt)?he:ve);et.position.copy(Qe),x.add(et)});const Ve=[14238010,2455746,14853632,3115863],Ze=new mi(18,2.6,18);return Ve.forEach((Qe,xt)=>{const et=new fr({color:Qe,roughness:.5,metalness:.1}),Oe=new ln(Ze,et),Br=-Math.PI/2+xt*Math.PI/2,ct=30;Oe.position.set(Math.cos(Br)*ct,1.1,Math.sin(Br)*ct),x.add(Oe)}),x}function Ke(){const x=new mi(10,10,10),M=it(),w=new ln(x,M);return w.position.set(0,16,0),w}function lt(){const{renderer:x,scene:M,camera:w}=t.current.three;!x||!M||!w||(t.current.three.animationId=requestAnimationFrame(lt),Ge(),ue(),fe(),x.render(M,w))}function Ge(){const x=150*t.current.three.zoom,M=110*t.current.three.zoom,w=t.current.assignedIndex??0,O=-Math.PI/2+w*Math.PI/2,q=Math.cos(O)*x,se=Math.sin(O)*x;t.current.three.camera.position.set(q,M,se),t.current.three.camera.lookAt(0,0,0)}function oe(){if(!t.current.game||!t.current.three.scene)return;const x=t.current.game.players.length*4;if(t.current.three.tokensGroup&&t.current.three.tokenMeshes.length===x)return;t.current.three.tokensGroup&&t.current.three.scene.remove(t.current.three.tokensGroup);const M=new vs,w=new Gd(3.1,24,24);t.current.three.tokenMeshes=[],t.current.game.players.forEach((O,q)=>{const se=Nt(O.color),de=new fr({color:se,roughness:.35,metalness:.1,emissive:0});for(let pe=0;pe<4;pe+=1){const ve=new ln(w,de.clone());ve.userData={playerIndex:q,tokenIndex:pe,selectable:!1,target:null};const he=tt(q,-1,pe);ve.position.copy(he),M.add(ve),t.current.three.tokenMeshes.push(ve)}}),t.current.three.tokensGroup=M,t.current.three.scene.add(M)}function D(){if(!t.current.game||!t.current.three.scene)return;oe();const x=t.current.game.turnIndex,M=t.current.game.dice,w=t.current.game.started&&M&&t.current.assignedIndex===x?Me(x,M):[];t.current.three.tokenMeshes.forEach(O=>{const{playerIndex:q,tokenIndex:se}=O.userData,de=t.current.game.players[q].tokens[se],pe=tt(q,de,se);O.userData.target=pe.clone();const ve=q===t.current.assignedIndex&&w.includes(se);O.userData.selectable=ve,O.scale.setScalar(ve?1.2:1),O.material&&O.material.emissive&&(O.material.emissive.setHex(ve?2245887:0),O.material.emissiveIntensity=ve?.35:0)})}function ue(){t.current.three.tokenMeshes.length&&t.current.three.tokenMeshes.forEach(x=>{const M=x.userData.target;M&&x.position.lerp(M,.2)})}function fe(){const{diceMesh:x,diceRoll:M}=t.current.three;if(!x||!M)return;const O=performance.now()-M.start,q=Math.min(O/M.duration,1),se=1-Math.pow(1-q,3),de=Math.PI*2*3*se,pe=Math.PI*2*se,ve=new Zi().setFromAxisAngle(new F(0,1,0),de),he=new Zi().setFromAxisAngle(new F(1,0,0),pe),Ve=ve.multiply(he).multiply(M.targetQuat);x.quaternion.copy(Ve),q>=1&&(x.quaternion.copy(M.targetQuat),t.current.three.diceRoll=null)}function Pe(x){if(!t.current.three.diceMesh)return;const M=Ae(x||1);t.current.three.diceRoll={start:performance.now(),duration:750,targetQuat:M}}function Ae(x){const M=new F(0,1,0),w={1:new F(0,1,0),2:new F(1,0,0),3:new F(0,0,1),4:new F(0,0,-1),5:new F(-1,0,0),6:new F(0,-1,0)},O=w[x]||w[1];return new Zi().setFromUnitVectors(O,M)}function it(){return[je(2),je(5),je(1),je(6),je(3),je(4)].map(M=>new fr({map:M,roughness:.45,metalness:.05}))}function je(x){const w=document.createElement("canvas");w.width=256,w.height=256;const O=w.getContext("2d");O.fillStyle="#ffffff",O.fillRect(0,0,256,256),O.fillStyle="#111827";const q=256*.06;({1:[[.5,.5]],2:[[.28,.28],[.72,.72]],3:[[.28,.28],[.5,.5],[.72,.72]],4:[[.28,.28],[.72,.28],[.28,.72],[.72,.72]],5:[[.28,.28],[.72,.28],[.5,.5],[.28,.72],[.72,.72]],6:[[.28,.25],[.72,.25],[.28,.5],[.72,.5],[.28,.75],[.72,.75]]})[x].forEach(([pe,ve])=>{O.beginPath(),O.arc(pe*256,ve*256,q,0,Math.PI*2),O.fill()});const de=new mR(w);return de.needsUpdate=!0,de}function yt(x){const M=t.current.game;if(!M||!M.started)return;const{raycaster:w,pointer:O,camera:q,canvas:se}=t.current.three;if(!w||!O||!q||!se)return;const de=se.getBoundingClientRect();O.x=(x.clientX-de.left)/de.width*2-1,O.y=-((x.clientY-de.top)/de.height)*2+1,w.setFromCamera(O,q);const pe=w.intersectObjects(t.current.three.tokenMeshes,!1);if(!pe.length)return;const ve=pe[0].object,{playerIndex:he,tokenIndex:Ve}=ve.userData;if(he!==t.current.assignedIndex)return;const Ze=M.dice;!Ze||!Me(M.turnIndex,Ze).includes(Ve)||(t.current.isHost?ne(he,Ve):we({type:"action",action:"move",payload:{tokenIndex:Ve}}))}function Ut(x){x.preventDefault();const M=Math.sign(x.deltaY);t.current.three.zoom=Math.min(1.4,Math.max(.7,t.current.three.zoom+M*.05))}function tt(x,M,w){if(M===-1)return t.current.board.waitingSlots[x][w].clone();if(M>=0&&M<=39){const O=le(x,M);return t.current.board.trackPositions[O].clone()}if(M>=40&&M<=43){const O=M-40;return t.current.board.homeStretchPositions[x][O].clone()}return new F(0,2.4,0)}function Nt(x){switch(x){case"red":return 14238010;case"blue":return 2455746;case"yellow":return 14853632;case"green":return 3115863;default:return 8947848}}function Tn(){if(V)return;if(!p.trim()){r("Enter your name before hosting.");return}t.current.isHost=!0,t.current.selfName=p.trim();const x=v.trim()||zr();m(x),g(!0),Ee(x);const M=ce(ye(t.current.selfName));Q(M,0)}function Jo(){if(!V){if(!p.trim()){r("Enter your name before joining.");return}v.trim()&&(t.current.isHost=!1,t.current.selfName=p.trim(),t.current.roomId=v.trim(),Ee(),t.current.peer.on("open",()=>{const x=t.current.peer.connect(t.current.roomId);Ne(x),x.on("open",()=>{x.send({type:"join",name:t.current.selfName||"Guest"}),z.includes(t.current.roomId)||X([t.current.roomId,...z])})}))}}function ea(){De(),t.current.connections.clear(),t.current.isHost=!1,t.current.selfId=null,t.current.assignedIndex=null,t.current.roomId=null,t.current.game=null,t.current.advanceTimeout&&(clearTimeout(t.current.advanceTimeout),t.current.advanceTimeout=null),t.current.three.tokensGroup&&t.current.three.scene&&t.current.three.scene.remove(t.current.three.tokensGroup),t.current.three.tokensGroup=null,t.current.three.tokenMeshes=[],t.current.three.diceRoll=null,t.current.three.diceMesh&&(t.current.three.diceMesh.visible=!1,t.current.three.diceMesh.rotation.set(0,0,0)),g(!1),m(""),r("Disconnected"),S([]),P(""),C(""),k(!1),I(!1),Q(null,null)}function zr(){const x=["sunny","brave","rapid","lucky","bright","calm","spark","nova"],M=["forest","comet","tiger","river","pulse","nebula","rider","glow"],w=x[Math.floor(Math.random()*x.length)],O=M[Math.floor(Math.random()*M.length)];return`${w}-${O}`}function ta(){V||t.current.game&&(t.current.isHost?(t.current.game.started||qe(),E()):we({type:"action",action:"roll",payload:{}}))}function rr(){const x=L.trim();if(x){if(!A(x)){Ue("System","Message blocked by safety filter.","system"),P("");return}t.current.isHost?(Ue(p||"Host",x,t.current.selfId||"me"),ot(p||"Host",x,t.current.selfId||"me")):we({type:"chat",name:p||"Guest",text:x}),P("")}}async function na(){if(J){C("Unmute to enable voice.");return}if(!t.current.mediaStream)try{const x=await navigator.mediaDevices.getUserMedia({audio:!0});x.getAudioTracks().forEach(M=>{M.enabled=!1}),t.current.mediaStream=x,k(!0),C(""),t.current.connections.forEach(M=>{const w=t.current.peer.call(M.peer,x);w.on("stream",O=>Ws(M.peer,O)),t.current.mediaConnections.set(M.peer,w)}),ac()}catch{C("Microphone permission denied.")}}function qn(x){J||t.current.mediaStream&&(t.current.mediaStream.getAudioTracks().forEach(M=>{M.enabled=x}),x?R():N())}function Ws(x,M){let w=document.getElementById(`audio-${x}`);w||(w=document.createElement("audio"),w.id=`audio-${x}`,w.autoplay=!0,w.playsInline=!0,document.body.appendChild(w)),w.srcObject=M,w.muted=J}function oc(){if(U.current)return;const x=!J;I(x),document.querySelectorAll("audio").forEach(M=>{M.muted=x}),x?(qn(!1),C("Audio muted.")):C("")}function ac(){const x=window.SpeechRecognition||window.webkitSpeechRecognition;if(!x||t.current.speechRecognition)return;const M=new x;M.continuous=!0,M.interimResults=!0,M.lang="en-US",M.onresult=w=>{let O="";for(let q=w.resultIndex;q<w.results.length;q+=1)O+=w.results[q][0].transcript;A(O)||(qn(!1),C("Voice blocked by safety filter."))},M.onend=()=>{t.current.speechRecognizing=!1},t.current.speechRecognition=M}function R(){const x=t.current.speechRecognition;if(!(!x||t.current.speechRecognizing)){t.current.speechRecognizing=!0;try{x.start()}catch{t.current.speechRecognizing=!1}}}function N(){const x=t.current.speechRecognition;if(x)try{x.stop()}catch{t.current.speechRecognizing=!1}}return me.createElement("div",{className:`app ${s!=null&&s.started?"game-started":""}`},V&&me.createElement("div",{className:"disclaimer"},me.createElement("div",{className:"disclaimer-card"},me.createElement("h2",null,"Play Nice"),me.createElement("p",{className:"hint"},"Chat and voice are family-friendly. Harmful language is blocked. By continuing, you agree to keep it kind."),me.createElement("div",{className:"button-row"},me.createElement("button",{onClick:()=>j(!1)},"I Understand")))),me.createElement("header",{className:"header"},me.createElement("div",null,me.createElement("div",{className:"eyebrow"},"Mensch ärgere Dich nicht"),me.createElement("h1",null,"3D P2P Table")),me.createElement("div",{className:"status"},i)),me.createElement("div",{className:"layout"},me.createElement("section",{className:"panel panel-left"},me.createElement("div",{className:"card"},me.createElement("h2",null,"Connection"),me.createElement("div",{className:"field-row"},me.createElement("label",{htmlFor:"playerName"},"Name"),me.createElement("input",{id:"playerName",type:"text",placeholder:"Your name",value:p,onChange:x=>y(x.target.value)})),me.createElement("div",{className:"field-row"},me.createElement("label",{htmlFor:"roomId"},"Room Name"),me.createElement("input",{id:"roomId",type:"text",placeholder:"sunny-forest",value:v,disabled:f,onChange:x=>m(x.target.value)})),me.createElement("div",{className:"button-row single-line"},me.createElement("button",{onClick:Tn,disabled:!p.trim()},"Host"),me.createElement("button",{className:"ghost",onClick:Jo,disabled:!p.trim()||!v.trim()},"Join"),me.createElement("button",{className:"ghost",onClick:ea,disabled:!(s!=null&&s.started)},"Reset Peer"))),(s==null?void 0:s.started)&&me.createElement("div",{className:"card"},me.createElement("h2",null,"Players"),me.createElement("div",{className:"players"},((s==null?void 0:s.players)||[]).filter(x=>x.connected!==!1).map((x,M)=>me.createElement("div",{key:x.id,className:"player-pill"},me.createElement("span",{className:`dot ${x.color}`}),me.createElement("span",null,x.name,M===a?" (you)":"")))))),me.createElement("section",{className:"panel panel-right"},me.createElement("div",{className:"card"},me.createElement("h2",null,"Chat"),_.length>0&&me.createElement("div",{className:"chat-log"},_.map(x=>me.createElement("div",{key:x.id,className:`chat-item ${x.from==="system"?"system":""}`},me.createElement("span",{className:"chat-name"},x.name,":"),me.createElement("span",{className:"chat-text"},x.text)))),me.createElement("div",{className:"chat-input"},me.createElement("input",{type:"text",placeholder:"Say something nice",value:L,onChange:x=>P(x.target.value),ref:K,disabled:!Y,onKeyDown:x=>{x.key==="Enter"&&rr()}}),me.createElement("button",{className:"icon-btn",onClick:rr,"aria-label":"Send chat",disabled:!Y},me.createElement("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},me.createElement("path",{d:"M3.4 20.6 22 12 3.4 3.4l2.3 7.6L16 12l-10.3 1z",fill:"currentColor"})))),!Y&&me.createElement("div",{className:"hint"},"Join a room to chat.")),me.createElement("div",{className:"card"},me.createElement("h2",null,"Voice"),me.createElement("p",{className:"hint"},"Hold to talk. Safety filter blocks harmful words."),me.createElement("div",{className:"button-row single-line"},me.createElement("button",{className:"ghost",onClick:na,disabled:!Y},"Enable Mic"),me.createElement("button",{className:"ghost",onClick:oc,disabled:!Y},J?"Unmute":"Mute"),me.createElement("button",{onMouseDown:()=>qn(!0),onMouseUp:()=>qn(!1),onMouseLeave:()=>qn(!1),onTouchStart:()=>qn(!0),onTouchEnd:()=>qn(!1),disabled:!b||!Y},"Push to Talk")),!Y&&me.createElement("div",{className:"hint"},"Join a room to use voice."),T&&me.createElement("div",{className:"hint"},T))),me.createElement("main",{className:"board-wrap"},me.createElement("div",{className:"board",ref:e},me.createElement("canvas",{ref:n,className:"three-canvas"})))),s&&me.createElement("div",{className:"bottom-controls"},me.createElement("div",{className:"controls-row"},d),me.createElement("div",{className:"controls-row"},me.createElement("button",{className:"ghost",onClick:qe,disabled:!t.current.isHost||(s==null?void 0:s.started)},"Start Game"),me.createElement("button",{onClick:ta,disabled:!W||(s==null?void 0:s.dice)!==null},"Roll Dice"),(s==null?void 0:s.started)&&me.createElement("div",{className:"dice"},c)),me.createElement("div",{className:"controls-row"},me.createElement("button",{className:"ghost",onClick:ea,disabled:!(s!=null&&s.started)},"Reset Peer"))))}const CR=j_(document.getElementById("root"));CR.render(me.createElement(TR,null));
