const { resolve } = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInjector = require('html-webpack-injector');
var { HtmlWebpackSkipAssetsPlugin } = require('html-webpack-skip-assets-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 *
 * @param {Object} options
 * @param {Object} options.definePluginOptions
 * @param {Object} options.mode
 * @returns webpack config
 */
module.exports = function commonConfig(options = {}) {
  const {
    definePluginOptions = {},
  } = options

  return {
    entry: {
      app: './app/scripts/app.js',
    },
    output: {
      filename: 'js/[name].js',
      path: resolve(__dirname, 'dist'),
    },
    externals: {
      angular: 'angular',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DefinePlugin({
        APP_MODULE_NAME: JSON.stringify('ls2cat'),
        ...definePluginOptions,
      }),
      new ForkTsCheckerWebpackPlugin(),
      new MiniCssExtractPlugin({
        chunkFilename: 'styles',
        filename: "css/app.css"
      }),
      new HtmlWebpackPlugin({
        template: './app/index.html',
        minify: {
          collapseWhitespace: true
        },
        chunks: ['app', 'styles'],
        hash: true
      }),
      new HtmlWebpackInjector(),
      new HtmlWebpackSkipAssetsPlugin(),
    ]
  }
}
