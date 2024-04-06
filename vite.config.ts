import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import pages from "vite-plugin-pages";
import layouts from "vite-plugin-vue-layouts";

import { fileURLToPath, URL } from "node:url";

const base = process.env.NODE_ENV === "production" ? "/unlayer-demo/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue({ template: transformAssetUrls }),
    pages(),
    layouts(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});
