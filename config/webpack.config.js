const path = require('path');

module.exports = {
  context: __dirname,
  entry: '../src/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    publicPath: '/public/'
  },
  module:{
    rules:[
      {
        test: /\.js?/,
        loader: 'babel-loader'
      }
    ]
  }
}
