const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const SpritesmithPlugin = require("webpack-spritesmith");

const cssLoader = {
	loader: "css-loader",
	options: {
		modules: true
	}
};

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
				use: ["style-loader", cssLoader]
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", cssLoader, "sass-loader"]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{ test: /\.png$/, use: ["file-loader?name=images/[hash].[ext]"] }
		]
	},
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat"
			// Must be below test-utils
		},
		modules: ["node_modules", "spritesmith-generated"]
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
				cwd: path.resolve(__dirname, "src/assets/images/stocks/ultimate"),
				glob: "*.png"
			},
			target: {
				image: path.resolve(
					__dirname,
					"src/assets/images/spritesheets/stocks-spritesheet.png"
				),
				css: path.resolve(__dirname, "src/assets/styles/_stocks.scss")
			},
			apiOptions: {
				cssImageRef: "../../assets/images/spritesheets/stocks-spritesheet.png"
			}
		})
	]
};
