
export default {
  mode: 'universal',
  // headers
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // loader
  loading: false,
  // global css
  css: [
    '~/assets/reset.scss',
    '~/assets/type.scss',
    '~/assets/util.scss'
  ],
  // plugins
  plugins: [
    { src: '~plugins/luxy.js', ssr: false }
  ],
  // nuxt js modules
  modules: [
    '@nuxtjs/pwa',
  ],
  // build config
  build: {
    extend (config, ctx) {
    }
  }
}
