// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['@/assets/app.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
