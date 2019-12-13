const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const SpritesmithPlugin = require("webpack-spritesmith");

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
		},
		modules: [
			"node_modules",
			"spritesmith-generated"
		]
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
		]),
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, "public/images/stocks/ultimate"),
				glob: "*.png"
			},
			target: {
				image: path.resolve(__dirname, "public/images/spritesheets/ultimate.png"),
				css: path.resolve(__dirname, "public/images/spritesheets/sprite.scss")
			},
			apiOptions: {
				cssImageRef: "~sprite.png"
			}
		})
	]
};
