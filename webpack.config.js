const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const cones = require("./cones.json");

module.exports = {
	mode: "development",
	entry: "./src/index",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build")
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new CopyWebpackPlugin([{ from: "public/index.html" }])],
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, "./public"),
		hot: true,
		open: true,
		historyApiFallback: true,
		before: function(app) {
			app.get("/api/cones", function(req, res) {
				// make some changes as real time happend here
				let timespan = (Date.now() / 6000) >> 0; // changes each 6 secs
				let timedCones = cones.map(({ riskLevel, mu, sigma }) => ({
					riskLevel,
					mu: mu + Math.sin(timespan) / 99,
					sigma: sigma + Math.cos(timespan) / 99
				}));
				res.json(timedCones);
			});
		}
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader"
			},
			{
				test: /\.css$/,
				loader: "css-loader"
			}
		]
	}
};
