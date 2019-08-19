module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        pragma: "wp.element.createElement"
      }
    ],
    "@babel/preset-env"
  ]
}
