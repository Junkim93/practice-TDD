const path = require("path");

module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/")],
        exclude: [/node_modules/, /\.spec.js$/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },

  devtool: "source-map",

  mode: "development"
};
