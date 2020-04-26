export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '秋葉,秋葉原,メイド,メイドバー,わんちゃんす' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.1.0.min.js' },
      { type: 'text/javascript', src: '//webfont.fontplus.jp/accessor/script/fontplus.js?3YlybV6urQ4%3D&box=tlruxgb88pk%3D&aa=1&ab=2', charset: 'utf-8' },
      { src: '/slick/slick.min.js' },
      { src: '/index-loader.js' },
      { src: '/loader.js' },
      { src: '/hamburger.js' },
      { src: '/page-top.js' },
      { src: '/slideshow.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/css/main.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
