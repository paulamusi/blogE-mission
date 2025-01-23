// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/custom.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n' 
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: ['en', 'es'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts' 
  },
  runtimeConfig: {
    secretKey: '',
    public: {
      apiBase: ''
    }
  }
})
