const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  performance: {
    hints: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: require.resolve('babel-loader'),
      options: {
        compact: true
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            minimize: true,
            sourceMap: true
          }
        }, {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9'
                ],
                flexbox: 'no-2009'
              })
            ]
          }
        }
        ]
      })
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({filename: 'main.css'}),
    new CopyWebpackPlugin([{from: './public'}]),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/'
    })
  ]
}
