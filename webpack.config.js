var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./index.jsx',
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel',
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'jacl.js',
	},
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};
