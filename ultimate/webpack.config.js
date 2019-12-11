const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const cssLoader = {
	loader: "css-loader",
	options: {
		modules: true	
	}
}

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
				test: /\.css$/i,
				use: [
					"style-loader",
					cssLoader
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					cssLoader,
					"sass-loader"
				]
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
			filename: "./index.html",
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		new CopyPlugin([
			{
				context: "./public",
				from: "**/*.!(html)",
				to: "./"
			}
		])
	]
};
