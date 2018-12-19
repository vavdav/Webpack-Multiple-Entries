const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
	entry: {
		entryA: './src/js/entryA',
		entryB: './src/js/entryB',
	},
	mode: 'development',
	output: {
		filename: 'js/[name].js',
		path: path.resolve(`dist/`),
		library: 'app',
		libraryTarget: 'window'
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/,
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: './src/index.ejs',
			filename: 'index.html',
		}),
		new CheckerPlugin()
	],
	// optimization: {
	// 	runtimeChunk: 'single'
	// },
	devServer: {
		contentBase: `./dist/`,
		compress: false,
		stats: 'errors-only',
		open: false,
	}
};
