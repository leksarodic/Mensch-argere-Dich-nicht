import { defineConfig } from "vite";
import { execSync } from "node:child_process";

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

export default defineConfig({
  base: "/Mensch-argere-Dich-nicht/",
  define: {
    __APP_VERSION__: JSON.stringify(commitHash),
  },
  server: {
    host: true,
  },
});
