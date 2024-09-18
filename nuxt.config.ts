import getHeadScripts from './commons/head-scripts'

export default defineNuxtConfig({
  experimental: {
    /**
     * see: https://v3.nuxtjs.org/api/configuration/nuxt.config#inlinessrstyles
     */
    inlineSSRStyles: false
  },

  pages: true,

  app: {
    head: {
      script: [...(getHeadScripts() as any)]
    }
  },

  css: [
    '~/public/assets/css/normalize.css',
    '~/public/assets/css/webflow.css',
    '~/public/assets/css/quicklaw.webflow.css',
    '~/public/assets/css/global.css',
    '~/assets/css/others/main.css'
  ],

  devServer: {
    port: 3002
  },

  runtimeConfig: {
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    public: {
      appENV: import.meta.env.APP_ENV,
      baseURL: import.meta.env.BASE_URL,
      cmsURL: import.meta.env.CMS_BASE_URL,
      siteURL: process.env.SITE_URL,
      paystackKey: process.env.PAYSTACK_PUBLIC_KEY,
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    ['nuxt-lodash', {
      prefix: 'lodash',
      prefixSkip: false
    }],
  ],

  routeRules: {
    '/nitro/**': { proxy: '/api/**' },
    '/download-template': { ssr: false },
    '/services': { ssr: false },
    '/dashboard/**': { ssr: false }
  },

  components: [
    '~/components/shimmers',
    '~/components/modals',
    '~/components/partials',
    '~/components/widgets',
    '~/components/utils',
    '~/components'
  ],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    viewer: false,
    quiet: true
  }

})
