const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('@api' , path.join(__dirname, 'src' , 'api'));
    config.resolve.alias.set('@components' , path.join(__dirname, 'src' , 'components'));
  },
})