// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    // baseURL: '/stagging/glass/',
    // buildAssetsDir: '/mydir/_nuxt/',
  },
  plugins: ['~/plugins/hotjar.client.js'],

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    // '@nuxtjs/google-adsense',
  ],

  gtag: {
    id: 'GTM-PQ42VB6',
  },
  // googleAdsense: {
  //   id: 'AW-694904937',
  // },

  css: ['~/assets/styles/main.scss'],

  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
  googleFonts: {
    display: 'swap',
    families: {
      Poppins: [300, 400, 600, 700, 900],
    },
  },
});
