const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin")
const glob = require("glob")
const path = require("path")
const fs = require("fs")

const mode = process.env.NODE_ENV || "development"
const debug = mode !== "production"
const devtool = debug ? "inline-sourcemap" : false

function getAssetName(location) {
  const sep = location.includes("/") ? "/" : "\\"
  return location
    .split(sep)
    .slice(-2, this.length)
    .join("-")
}

const entry = {}
glob.sync("./src/blocks/**/*.js").forEach(location => {
  const name = getAssetName(location)
  entry[name] = location
})

const cleanup = {
  apply: compiler => {
    compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
      fs.unlinkSync("dist/main.js")
    })
  }
}

const jsConfig = {
  context: __dirname,
  devtool,
  mode,
  entry,
  output: {
    filename: "[name]",
    publicPath:
      "wp-content/plugins/eecontracting-gutenberg-block-byschweb/dist/" // FRAGILE
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader"
      }
    ]
  },
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new DependencyExtractionWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "src/blocks/**/*.php", to: "", flatten: true }
    ])
  ]
}

const cssConfig = {
  context: __dirname,
  devtool,
  mode,
  entry: glob.sync("./src/blocks/**/*.scss"),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: location => {
                const rawName = getAssetName(location)
                return rawName.replace("scss", "css")
              }
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
