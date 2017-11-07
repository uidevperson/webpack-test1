'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
