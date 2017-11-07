'use strict';
const webpack = require('webpack');
const path = require('path');
const inProduction = (process.env.NODE_ENV  === 'production');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.s[ac]ss$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
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

