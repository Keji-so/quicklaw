/** Module Options */
const lodashOptions = {
  prefix: 'lodash',
  prefixSkip: false
}

export default defineNuxtConfig({
  pages: true,

  css: ['~/assets/css/others/main.css'],

  devServer: {
    port: 3002
  },

  runtimeConfig: {
    public: {
      appENV: import.meta.env.APP_ENV,
      baseURL: import.meta.env.BASE_URL
    }
  },

  modules: ['@nuxtjs/tailwindcss', ['nuxt-lodash', lodashOptions]],

  routeRules: {
    '/nitro/**': { proxy: '/api/**' }
  },

  components: [
    '~/components/shimmers',
    '~/components/modals',
    '~/components/partials',
    '~/components/widgets',
    '~/components'
  ],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    viewer: false,
    quiet: true
  }
})
