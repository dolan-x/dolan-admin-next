import { URL, fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import Unocss from "unocss/vite";
import VueComponents from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import I18n from "@intlify/unplugin-vue-i18n/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { FontaineTransform } from "fontaine";

export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
      reactivityTransform: true,
    }),
    Vuetify({
      autoImport: true,
    }),
    Unocss(),
    VueComponents({
      dts: "./src/components.d.ts",
    }),
    AutoImport({
      dts: "./src/auto-imports.d.ts",
      imports: [
        "@vueuse/core",
        "@vueuse/head",
        "vue",
        "vue/macros",
        "pinia",
        "vue-router",
        "vue-i18n",
      ],
    }),
    I18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, "src/locales/**")],
    }),
    Pages(),
    Layouts(),
    FontaineTransform.vite({
      fallbacks: ["BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans"],
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue",
    ],
  },
  server: {
    port: 3000,
  },
});
