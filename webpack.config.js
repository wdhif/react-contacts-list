module.exports = {
	entry: [
		'./src/App.jsx'
	],
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}]
	}
};
