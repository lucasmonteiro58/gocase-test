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
    "vuetify-nuxt-module",
  ],
  svgo: {
    defaultImport: "component",
  },
  tailwindcss: {
    configPath: "tailwind.config",
  },
  imports: {
    dirs: ["stores"],
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
  css: ["@/assets/styles/main.css"],
});
