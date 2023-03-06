// we set root directory to be our src directory. I consider it a source file, so I keep it in src. By default, Vite places it in the root.

import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../public",
  },
});
