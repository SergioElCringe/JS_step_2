const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
require('babel-polyfill');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js'],
  },
  mode: 'development',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  target: ["web", 'es5'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),

  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
  },
};