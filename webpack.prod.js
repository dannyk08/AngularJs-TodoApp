const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.js')

module.exports = (_, webpackArgs) => {
  const { mode = 'development' } = webpackArgs || {}

  return merge(commonConfig({
    mode,
    externalScripts: [
      'https://unpkg.com/react@17/umd/react.production.min.js',
      'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
    ],
    definePluginOptions: {
      DEV_MODE: JSON.stringify(mode == 'development'),
    }
  }), {
    devtool: 'inline-source-map',
  })
};
