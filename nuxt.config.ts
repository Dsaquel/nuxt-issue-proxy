// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/backend/**': {
      proxy: {
        to:'https://jsonplaceholder.typicode.com/**',
      },
    }
  },

  devtools: { enabled: true },

  compatibilityDate: '2025-03-14'
})
