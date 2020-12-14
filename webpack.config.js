const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: { 
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|webp|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.html',
    }),
    new miniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
}