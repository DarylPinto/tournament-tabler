const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const SpritesmithPlugin = require("webpack-spritesmith");

const cssLoader = {
	loader: "css-loader",
	options: {
		modules: {
			mode: "local",
			localIdentName: "[hash:base64:5]"
		}
	}
};

module.exports = {
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.[hash].js"
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
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
			{ test: /\.(pn|sv)g$/, use: ["file-loader?name=images/[hash].[ext]"] }
		]
	},
	resolve: {
		alias: {
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat"
			// Must be below test-utils
		},
		modules: ["node_modules", "spritesmith-generated"],
		extensions: [".ts", ".tsx", ".js"]
	},
	// devtool: "source-map",
	devServer: {
		contentBase: __dirname,
		compress: true,
		port: 3000,
		overlay: true,
		historyApiFallback: true,
		stats: "minimal"
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/static/index.html",
			filename: "./index.html",
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		new CopyPlugin([
			{
				context: "./src/static",
				from: "**/*.!(html)",
				to: "./"
			}
		]),
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, "src/assets/images/stocks"),
				glob: "**/*.png"
			},
			target: {
				image: path.resolve(__dirname, "src/components/StockIcon/sprites.png"),
				css: path.resolve(__dirname, "src/components/StockIcon/_sprites.scss")
			},
			apiOptions: {
				cssImageRef: "sprites.png"
			}
		})
	]
};
