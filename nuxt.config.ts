// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/image'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  srcDir: './src',

  typescript: {
    typeCheck: true,
    strict: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    
  }
})