const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const dev = process.env.NODE_ENV !== "productioin";

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "/src/index.js")],
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
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/assets/favicon_32x32_tW0_icon.ico",
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    host: "localhost",
    port: "3000",
    historyApiFallback: true
  },
  mode: dev ? "development" : "production",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "/build")
  }
};
