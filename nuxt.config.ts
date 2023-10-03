// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

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
