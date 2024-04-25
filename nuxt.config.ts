// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    dirs: ["stores", "composables"],
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
              primary: "#6366f1",
              primaryDark: "#4338ca",
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