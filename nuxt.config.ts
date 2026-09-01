// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
  ],
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',
  css: ['@/assets/app.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        class: '',
        lang: 'en'
      },
      titleTemplate: '%s Aexhell',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Waving the virtual tapestry of the Internet, developing immersive online experiences.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Aexhell' },
        { property: 'og:title', content: 'Aexhell — Web Developer' },
        { property: 'og:description', content: 'Waving the virtual tapestry of the Internet, developing immersive online experiences.' },
        { property: 'og:image', content: '/banner.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Aexhell — Web Developer' },
        { name: 'twitter:description', content: 'Waving the virtual tapestry of the Internet, developing immersive online experiences.' },
        { name: 'twitter:image', content: '/banner.png' }
      ],
      script: [],
      link: [
        { rel: 'icon', href: '/icon-white.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', href: '/icon.png', type: 'image/png', media: '(prefers-color-scheme: light)' }
      ],
      style: [],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
})
