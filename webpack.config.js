const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

module.exports = {
  entry: path.resolve( 'src', 'index.jsx' ),
  output: {
    path: path.resolve( 'dist' ),
    publicPath: '/'
  },
  module: {
    rules: [ {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.s[ac]ss$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
    }, {
      test: /\.(png|jpe?g|gif)$/,
      loader: 'file-loader'
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