import { defineConfig } from "vite";
import { resolve } from "path";
import { compilerOptions } from "./tsconfig.json";

import vue from "@vitejs/plugin-vue";
import postcss from "./postcss.config.js";

const { baseUrl, paths: aliases } = compilerOptions;

const alias = Object.entries(aliases).reduce((acc, [key, [value]]) => {
  const [aliasKey, path] = [key, value].map((v) =>
    v.substring(0, v.length - 2)
  );

  const aliasPath = resolve(__dirname, baseUrl, path);

  return {
    ...acc,
    [aliasKey]: aliasPath,
  };
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
  css: {
    postcss,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/global.scss";
        @import '@/assets/scss/project_card_style.scss';
        @import '@/assets/scss/project_content_style.scss';`,
      },
    },
  },
  //   base: "./weikoli.github.io/",
  base: process.env.NODE_ENV === 'production' ? 'weikoli.github.io' : './',
});
