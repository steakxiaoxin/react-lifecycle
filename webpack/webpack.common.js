const path = require('path')
// generate html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[contenthash:6].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      hash: true,
      minify: {
        collapseWhitespace: true // 把生成的 index.html 文件的内容的没用空格去掉，减少空间
      }
    })
  ]
}
