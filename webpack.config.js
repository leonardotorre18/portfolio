const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  mode: "production",
  entry: "./app/index.js",

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [[
            '@babel/preset-react',
            {
              runtime: 'automatic'
            }
          ]]
        }
      },{
        test: /\.(css|scss|sass)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },{
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html'
    })
  ],
  devServer: {
    open: true,
    port: 5000
  }
}