// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    './assets/css/main.css',
  ],
  
  alias: {
    "@" : "/<rootDir>"
  },

  postcss: {
    plugins: {
      cssnano: false,
    },
  },
})
