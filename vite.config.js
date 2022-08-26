import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcss from './postcss.config.js';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss,
  },
//   base: "./newportfolio/",
});
