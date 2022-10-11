const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: [__dirname + "/src"],
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{ 	test: /\.hbs$/, 
				loader: "handlebars-loader" 
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  name: '[path][name].[ext]',
					  limit: 8192,
					  esModule: false,
					},
				  },
				  'img-loader',
				],
			},
			{
				test: /\.png$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "src/index.html", minify: {
			collapseWhitespace: true,
			removeComments: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			useShortDoctype: true,} })
	],
	devServer: {
		static: "./dist",
	},
};
