const { resolve } = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInjector = require('html-webpack-injector');
const { HtmlWebpackSkipAssetsPlugin } = require('html-webpack-skip-assets-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlTagsWebpackPlugin = require('html-webpack-tags-plugin')

const { dependencies } = require('./dependencies');

/**
 *
 * @param {Object} options
 * @param {Object} options.definePluginOptions
 * @param {String} options.mode
 * @param {String[]} options.externalScripts
 * @returns webpack config
 */
module.exports = function commonConfig(options = {}) {
  const {
    mode = 'development',
    definePluginOptions = {},
    externalScripts = [],
  } = options || {}

  return {
    mode,
    entry: {
      app: './app/scripts/app.ts',
    },
    output: {
      filename: 'js/[name].js',
      path: resolve(__dirname, 'dist'),
    },
    externals: {
      angular: 'angular',
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.tsx?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: mode,
            }
          }
        },
        {
          test: /\.ts?$/i,
          exclude: /node_modules/,
          include: resolve(__dirname, 'app'),
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            },
          ]
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    externals: {
      'angular': 'angular',
      'angular-animate': 'angular-animate',
      'angular-cookies': 'angular-cookies',
      'angular-route': 'angular-route',
      'ui-bootstrap-tpls': 'ui-bootstrap-tpls',
      'angular-touch': 'angular-touch',
      'angular-resource': 'angular-resource',
      'angular-sanitize': 'angular-sanitize',
      'angular-messages': 'angular-messages',
      'angular-breadcrumb': 'angular-breadcrumb',
      'ngStorage': 'ngStorage',
      'angular-file-upload': 'angular-file-upload',
      'angular-idle': 'angular-idle',
      'react': 'React',
      'react-dom': 'ReactDOM',
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
      new HtmlTagsWebpackPlugin({
        append: false,
        usePublicPath: false,
        scripts: dependencies(mode == 'production').concat(externalScripts),
      }),
    ]
  }
}
