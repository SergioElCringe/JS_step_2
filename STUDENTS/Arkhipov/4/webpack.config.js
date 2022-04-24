const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
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
		new CopyPlugin({
			patterns: [
				{ from: './src/assets/img', to: 'assets/img', noErrorOnMissing: true },
				{ from: './src/assets/plugins', to: 'assets/plugins', noErrorOnMissing: true },
			]
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
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
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