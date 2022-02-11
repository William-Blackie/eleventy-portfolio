const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'main.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { 
          from: "src/assets/images/", 
          to: "images/" 
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  }
};