const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerPlugin = require('./plugins/ServiceWorkerPlugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: __dirname + '/src/html/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ServiceWorkerPlugin({
      swDest: 'serviceWorker.js',
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single'
  },
  module: {
    rules: [{
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    }, {
      test: /\.(mp3)$/i,
      loader: 'file-loader'
    }, {
      test: /\.css$/i,
      use: [{
        loader: 'style-loader',
        options: {
          insert: 'head',
          injectType: 'singletonStyleTag'
        }
      }, 'css-loader']
    }]
  }
}