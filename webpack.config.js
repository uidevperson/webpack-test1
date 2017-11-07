'use strict';
var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV  === 'production');

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
      },
      {
        test: /\.js $/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: []
};

if(inProduction){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

