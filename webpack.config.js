const path = require(`path`);
const webpack = require(`webpack`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const {UglifyJsPlugin} = webpack.optimize;
const ExtractTextWebpackPlugin = require(`extract-text-webpack-plugin`);
const extractCSS = new ExtractTextWebpackPlugin(`css/style.css`);

const copy = new CopyWebpackPlugin([{
  from: `./src/assets`,
  to: `./assets`
}, {
  from: `./src/**.html`,
  to: `./`,
  flatten: true
}, {
  from: `./src/js/vendors`,
  to: `./js/vendors`
}], {
  ignore: [
    `.DS_Store`,
  ]
});

module.exports = {
  entry: {
    script: `./src/js/script.js`,
    admin: `./src/js/admin.js`,
    notFound: `./src/js/notFound.js`,
    santa: `./src/js/santaScript.js`,
    style: `./src/css/style.css`
  },

  resolve: {
    extensions: [
      `.js`,
      `.css`
    ]
  },

  output: {
    path: path.resolve(`./server/public`),
    filename: `js/[name].js`
  },

  devtool: `inline-source-map`,

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`
          },
          {
            loader: `eslint-loader`,
            options: {
              fix: true
            }
          }
        ]

      },
      {
        test: /\.html$/,
        loader: `html-loader`,
        options: {
          attrs: [
            `audio:src`,
            `img:src`,
            `video:src`,
            `source:srcset`
          ] // read src from video, img & audio tag
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract([
          {
            loader: `css-loader`,
            options: {
              importLoaders: 1,
              syntax: `sugarss`
            }
          },
          {
            loader: `postcss-loader`
          }
        ])
      }
    ]
  },

  plugins: [
    copy,
    new UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),
    extractCSS
  ]
};
