export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    public: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID
    }
  }
})
