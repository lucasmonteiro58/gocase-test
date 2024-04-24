// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/eslint",
    "nuxt-icon",
    "nuxt-svgo",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  svgo: {
    defaultImport: "component",
  },
  tailwindcss: {
    configPath: "tailwind.config",
  },
  googleFonts: {
    families: {
      Quicksand: [400, 500, 700],
    },
  },
});
