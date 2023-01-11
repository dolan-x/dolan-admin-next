import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        "display": "inline-block",
        "height": "1.4em",
        "width": "1.4em",
        "vertical-align": "text-bottom",
      },
    }),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        main: ["Fira Code", "Noto Serif SC"],
      },
    }),
  ],
});
