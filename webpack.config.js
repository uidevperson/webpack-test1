'use strict';
let webpack = require('webpack');
let path = require('path');
let inProduction = (process.env.NODE_ENV  === 'production');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/main.js',
      './src/main.scss',
    ]
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules:[
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: 'css-loader'
      //   })
      // },
      {
        test: /\.s[ac]ss$/,
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.js $/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction,

    })
  ]
};

if(inProduction){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

