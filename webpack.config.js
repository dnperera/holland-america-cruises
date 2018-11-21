const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./public"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
          // {
          //   loader: "style-loader"
          // },
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: false,
          //     importLoaders: 1,
          //     localIdentName: "[name]_[local]_[hash:base64]",
          //     sourceMap: true,
          //     minimize: true
          //   }
          // },
          // {
          //   loader: "sass-loader"
          // }
        ]
      }
    ]
  }
};
