// next.config.js
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withCSS(
  withImages({
    webpack(config, options) {
      return config
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    target: "serverless",
  })
)
