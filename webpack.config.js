const webpack = require("webpack")
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin")
const glob = require("glob")
const path = require("path")
const fs = require("fs")

const mode = process.env.NODE_ENV || "development"
const debug = mode !== "production"

const entry = {}
glob.sync("./src/blocks/**/*.js").forEach(location => {
  const blockName = path.basename(location)
  entry[blockName] = location
})

const jsConfig = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  mode,
  entry,
  output: {
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new DependencyExtractionWebpackPlugin()]
}

const cleanup = {
  apply: compiler => {
    compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
      fs.unlinkSync("dist/main.js")
    })
  }
}

const cssConfig = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  mode,
  entry: glob.sync("./src/blocks/**/*.scss"),
  plugins: [cleanup],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css"
            }
          },
          "extract-loader",
          "css-loader?-url",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
}

module.exports = [jsConfig, cssConfig]
