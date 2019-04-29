const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const webpack = require('webpack')
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[{
        loader: 'file-loader',
        options: {
            name(file) {
              if (process.env.NODE_ENV === 'development') {
                return '[path][name].[ext]';
              }

              return '[hash].[ext]';
            },
          },
         }]
      },
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
                   options: {
                       pretty: true
                   }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: "./src/pug/pages/index.pug"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new ImageminPlugin({
      test: 'src/static/img/**',
      pngquant: {
        quality: '95-100'
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
//     new HtmlWebpackExternalsPlugin({ // optional plugin: inject cdn
//   externals: [
//     {
//         module: 'jquery',
//         entry: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
//     }
//   ],
// })
  ]
};
