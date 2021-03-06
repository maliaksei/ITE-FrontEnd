'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill',  './src/App.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
    ],
    loaders: [
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.(jpg|otf|eot|svg|ttf|woff|woff2|png)$/, loader: 'file'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
