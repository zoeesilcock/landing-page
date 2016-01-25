var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
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
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
