const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
require('babel-polyfill');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        app: ['babel-polyfill', './index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        hot: isDev,
        open: true
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: './product.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './src/styles/[name].css',
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules|bower_components/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};