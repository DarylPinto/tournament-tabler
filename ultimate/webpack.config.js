const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat"
			// Must be below test-utils
		}
	},
	devServer: {
		contentBase: __dirname,
		compress: true,
		port: 3000,
		overlay: true
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	]
};
