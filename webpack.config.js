const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

module.exports = {
  entry: path.resolve( 'src', 'index.jsx' ),
  output: {
    path: path.resolve( 'dist' ),
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.s[ac]ss$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
    } ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.resolve( 'index.html' )
    } ),
    new MiniCssExtractPlugin( {} )
  ],
  resolve: {
    extensions: [ '.js', '.json', '.jsx' ]
  },
  devServer: {
    historyApiFallback: true
  }
}