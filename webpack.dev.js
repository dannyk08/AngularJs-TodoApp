const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.js');

module.exports = (_, webpackArgs) => {
  const { mode = 'development' } = webpackArgs || {}

  return merge(commonConfig({
    mode,
    externalScripts: [
      'https://unpkg.com/react@17/umd/react.development.js',
      'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
    ],
    definePluginOptions: {
      DEV_MODE: JSON.stringify(mode == 'development'),
    }
  }), {
    devtool: 'inline-source-map',
    devServer: {
      compress: true,
      port: 9000,
      disableHostCheck: true,
      historyApiFallback: true,
    },
  })
};
