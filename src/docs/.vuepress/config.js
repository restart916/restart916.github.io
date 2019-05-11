const path = require("path");
const webpack = require("webpack");


module.exports = {
  title: 'Hyunjin Yoon',
  description: 'blog',
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/' },
      { text: 'Works', link: '/works/' },
      { text: 'Book', link: '/book/' },
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
