const path = require("path");
const webpack = require("webpack");


module.exports = {
  title: 'Wally Lee',
  description: 'dev blog',
  head: [
      ['link', {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
        crossorigin: 'anonymous'
      }],
      ['meta', { name: 'og:title', content: 'Wally Lee' }],
      ['meta', { name: 'og:description', content: 'dev blog' }],
      ['meta', { name: 'og:image', content: 'https://restart916.github.io/upload/profile_image.png' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: 'auto'
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "theme"),
        styles: path.resolve(__dirname, "theme", "styles")
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  }
}
