const { merge } = require('webpack-merge')
const HtmlTagsWebpackPlugin = require('html-webpack-tags-plugin')
// const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const commonConfig = require('./webpack.common.js')

module.exports = (_, webpackArgs) => {
  const {
    mode = 'development',
  } = webpackArgs || {}

  const plugins = [
    new HtmlTagsWebpackPlugin({
      append: false,
      usePublicPath: false,
      scripts: [
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.10/angular.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-animate/1.8.2/angular-animate.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-cookies/1.8.2/angular-cookies.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-route/1.8.2/angular-route.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.6/ui-bootstrap-tpls.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-touch/1.6.10/angular-touch.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.6.10/angular-resource.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.6.10/angular-sanitize.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-messages/1.6.10/angular-messages.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-breadcrumb/0.5.0/angular-breadcrumb.js',
        'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.11/ngStorage.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-file-upload/2.6.1/angular-file-upload.js',
        'https://cdnjs.cloudflare.com/ajax/libs/ng-idle/1.3.2/angular-idle.js',
      ]
    }),
  ]

  serveOptions = {
    devServer: {
      compress: true,
      port: 9000,
      disableHostCheck: true,
      historyApiFallback: true,
    },
  }

  return merge(commonConfig({
    mode,
    definePluginOptions: {
      DEV_MODE: JSON.stringify(mode == 'development'),
    }
  }), {
    ...serveOptions,
    mode,
    devtool: 'inline-source-map',
    plugins,
  })
};
