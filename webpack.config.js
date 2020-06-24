const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';

const config = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

if (environment === 'development') {
  config.devtool = 'source-map';
  config.devServer = {
    host: 'localhost',
    historyApiFallback: {
      index: '/'
    },
    port: 8080,
    hot: true,
    overlay: true
  };
} else {
  config.plugins = [...config.plugins, new CleanWebpackPlugin()];
}

module.exports = config;
