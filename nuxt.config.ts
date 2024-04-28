// https://nuxt.com/docs/api/configuration/nuxt-config
import { slate, amber } from "tailwindcss/colors";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Make your Case",
      htmlAttrs: {
        lang: "pt-BR",
      },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/eslint",
    "nuxt-icon",
    "nuxt-svgo",
    "@nuxtjs/google-fonts",
    "vuetify-nuxt-module",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  svgo: {
    defaultImport: "component",
  },
  imports: {
    dirs: ["stores", "composables", "utils"],
  },
  googleFonts: {
    families: {
      Quicksand: [400, 500, 700],
      "DM Serif Display": true,
      Pacifico: true,
      "Open Sans": [400],
      Roboto: [400],
      "Dancing Script": true,
      "Rubik Mono One": true,
      "Cutive Mono": true,
      "Zilla Slab": true,
    },
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "light",
        themes: {
          light: {
            colors: {
              primary: slate[800],
              primaryDark: slate[800],
              secondary: amber[500],
            },
          },
        },
      },
    },
  },
  tailwindcss: {
    configPath: "tailwind.config",
  },
  css: ["@/assets/styles/main.css", "vue3-emoji-picker/css"],
});
