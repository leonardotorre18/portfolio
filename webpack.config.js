const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new ESLintPlugin(),
  ],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      }, {
        test: /\.(css|scss|sass)$/i,
        include: path.resolve(__dirname, 'app'),
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          'css-loader',
          // Compiles Sass to CSS
          // 'style-loader',
          // Translates CSS into CommonJS
          'postcss-loader',
          'sass-loader',
        ],
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    port,
    // open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    modules: [
      'node_modules',
    ],
  },
};
