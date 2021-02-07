const path = require('path')
const webpack = require('webpack')
var merchApiUrl
var contactApiUrl
var menuApiUrl

if (process.env.NODE_ENV === 'production') {
  merchApiUrl = 'https://merch.jalgraves.com'
  contactApiUrl = 'https://merch.jalgraves.com'
  menuApiUrl = 'https://merch.jalgraves.com'
} else {
  merchApiUrl = 'http://localhost:5000'
  contactApiUrl = 'https://locahost:5004'
  menuApiUrl = 'http://localhost:5012'
}

module.exports = env => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.SQUARE_APP_ID": JSON.stringify(process.env.SQUARE_APP_ID),
        "process.env.MERCH_API_URL": JSON.stringify(merchApiUrl),
        "process.env.MENU_API_URL": JSON.stringify(menuApiUrl),
        "process.env.CONTACT_API_URL": JSON.stringify(contactApiUrl)
      })
    ],
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/public/js'),
    },
    node: {
      fs: 'empty'
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