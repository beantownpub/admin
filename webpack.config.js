const path = require('path')
const webpack = require('webpack')

module.exports = env => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.SQUARE_APP_ID": JSON.stringify(process.env.SQUARE_APP_ID),
      })
    ],
    mode: process.env.NODE_ENV.trim(),
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/public/js'),
    },
    node: {
      fs: false
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};