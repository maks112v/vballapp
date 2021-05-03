export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vballapp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCIhmg84P5azvxHnJMVFJ-1dDgAPVfjVIc',
          authDomain: 'vball-app-a59e1.firebaseapp.com',
          projectId: 'vball-app-a59e1',
          storageBucket: 'vball-app-a59e1.appspot.com',
          messagingSenderId: '965568793762',
          appId: '1:965568793762:web:301b19a15e461593fddbfb',
          measurementId: 'G-71552EYQGQ',
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          database: true,
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
