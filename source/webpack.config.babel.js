require('@babel/register');

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import TerserPlugin from 'terser-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import HtmlReplaceWebpackPlugin from 'html-replace-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import ReplaceInFileWebpackPlugin from 'replace-in-file-webpack-plugin'
import checkIsDevBuild from './src/assets/js/snippets/checkIsDevBuild';

const isProduction = ( process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' );
const isDevBuild   = checkIsDevBuild();
const isHot = path.basename(require.main.filename) === 'webpack-dev-server.js';

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: [
    './src/main.js',
    './src/assets/scss/main.scss'
  ],
  mode: 'development',
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { defaults: true },
          output: { comments: false }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  devtool: isProduction ? '' : 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: (isProduction) ? '' : '/',
    filename: 'js/[name].[hash].js'
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, 'src/assets'),
      path.resolve(__dirname, 'src')
    ],
    historyApiFallback: true,
    open: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.png', '.jpg', '.jpeg', '.svg', '.gif'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src')
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /(\.scss|\.sass|\.css)$/,
      use: [
        'vue-style-loader',
        (!isHot) ? MiniCssExtractPlugin.loader : {
          loader: 'style-loader',
          options: {
            sourceMap: !isProduction
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: !isProduction,
            minimize: isProduction,
            url: isDevBuild
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProduction,
            url: isDevBuild
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: !isProduction,
            url: isDevBuild
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      exclude: /favicons/,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]',
        publicPath: (isProduction) ? '' : '/'
      }
    },
    {
      test: /\.(png|xml|ico|webmanifest)(\?.*)?$/,
      include: /favicons/,
      loader: 'file-loader',
      options: {
        name: 'images/favicons/[name].[ext]'
      }
    },
    {
      test: /\.svg$/,
      include: /icons/,
      loader: 'vue-svg-loader',
      options: {
        svgo: {
          plugins: [
            { removeDoctype: true },
            { removeComments: true }
          ]
        }
      }
    },
    {
      test: /\.(mp4|webm|ogg|ogv|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'fonts/[name].[ext]'
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      alwaysWriteToDisk: true,
    }),
    new webpack.DefinePlugin({
      'process.browser': 'true',
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        MEDIA_PATH: JSON.stringify(process.env.MEDIA_PATH)
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      allChunks: true,
    }),
    new VueLoaderPlugin(),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif)$/i,
      disable: !isProduction,
      jpegtran: null,
      optipng: null,
      pngquant: {
        quality: "75-90",
        verbose: false,
        speed: 10
      },
      plugins: [
        imageminMozjpeg({
          quality: 90,
          progressive: true
        })
      ]
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

switch (process.env.NODE_ENV) {

  case 'production':
    module.exports.plugins.push(
      new CleanWebpackPlugin('dist', { exclude: ['.gitkeep'] }),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'src/assets/images'),
          to: path.join(__dirname, 'dist/images'),
          ignore: [ '.DS_Store' ],
          debug: 'info'
        },
        {
          from: path.join(__dirname, 'src/assets/video'),
          to: path.join(__dirname, 'dist/video'),
          ignore: [ '.DS_Store' ],
          debug: 'info'
        }
      ]),
      new HtmlReplaceWebpackPlugin([
        {
          pattern: '<!--devFonts-->',
          replacement: ''
        },
        {
          pattern: '<!--mediaPrefix-->',
          replacement: '<div id="mediaPrefix" data-prefix="${mediaPrefix}"></div>\n'
        }
      ]),
      new ReplaceInFileWebpackPlugin(
        [{
          dir: 'dist/css',
          test: [/\.css$/],
          rules: [
            {
              search: /url\(..\//ig,
              replace: "url(" + process.env.MEDIA_PATH
            },
            {
              search: /#app #app/ig,
              replace: "#app"
            },
            {
              search: /#app body/ig,
              replace: "#app"
            },
            {
              search: /#app html/ig,
              replace: "#app"
            },
            {
              search: /#app :root/ig,
              replace: "#app:root"
            }
          ]
      }])
    );
    break;

  default:
    module.exports.plugins.push(
      new HtmlReplaceWebpackPlugin([
        {
          pattern: '<!--devFonts-->',
          replacement: '<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/c18535b4-d0fb-421e-8e32-f585f9d412c0.css">'
        },
        {
          pattern: '<!--mediaPrefix-->',
          replacement: '  \n<div id="mediaPrefix" data-prefix="' + process.env.MEDIA_PATH + '"></div>\n'
        }
      ])
    );
    break;

}
