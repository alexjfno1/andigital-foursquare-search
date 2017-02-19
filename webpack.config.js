var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');

console.log('******************** Building for ENV:', process.env.NODE_ENV, '********************');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['babel-polyfill', './src/react/app'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  autoprefixer({ browsers: ['last 3 versions', 'ie 10'] })
                ];
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2|eot|ttf|woff|svg)$/,
        use: 'url-loader?limit=100000'
      }
    ]
  }
};
