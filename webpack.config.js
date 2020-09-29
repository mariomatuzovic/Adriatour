const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
  // Configuration for webpack-dev-server@3.2.1
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   publicPath: '/assets/',
  // },
  // Module property object
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env'],
  //         },
  //       },
  //     },
  //   ],
  // },
};
