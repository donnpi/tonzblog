module.exports = {
  title: "Tonz's Blog",
  description: "second try",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
    ['meta', { author: 'keywords', content: 'Tonz' }],
    ['meta', { name: 'keywords', content: 'vuepress博客 Tonz' }],
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/logo.png',
    nav: require('./nav.js'),
    sidebar: {
      "/js/": [
        'js1',
        'js2'
      ]
    }
  }
}