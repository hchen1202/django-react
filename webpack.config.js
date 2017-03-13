/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-09T22:43:45-05:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-10T17:36:22-05:00
*/



const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [

    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates


    './index.js',
    // the entry point of our app
  ],
  output: {

    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'app/dist'),

    publicPath: '/static'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'app/static/'),

  devtool: 'inline-source-map',

  devServer: {

    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'app/static'),
    // match the output path

    publicPath: '/static'
    // match the output `publicPath`
  },
  resolve: {
     extensions: [' ', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

  ],
};
