const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
  entry: path.resolve( 'src', 'index.jsx' ),
  output: {
    path: path.resolve( 'dist' ),
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    } ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.resolve( 'index.html' )
    } )
  ]
}