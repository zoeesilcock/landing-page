var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  module: {
    loaders: [ {
      test: /\.scss$/,
      loader: 'style!css!sass!'
    },
    {
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      },
      exclude: path.join(__dirname, 'node_modules')
    } ]
  }
};
