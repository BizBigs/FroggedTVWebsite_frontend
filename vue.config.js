const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost'
  },
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
  transpileDependencies: ["quasar"],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  }
};
