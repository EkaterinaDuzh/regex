const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'main.js', 
  },

  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: [{ loader: 'babel-loader' }], 
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: [ 
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};