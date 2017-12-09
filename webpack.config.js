const path = require(`path`);
const webpack = require(`webpack`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);

const copy = new CopyWebpackPlugin([{
  from: `./src`,
  to: `./`
}], {
  ignore: [
    `.DS_Store`,
    './js/script.js',
    './js/classes/*',
    './js/objects/*'
  ]
});

module.exports = {
  entry: './src/js/script.js',

  output: {
    path: path.resolve(`./server/public`),
    filename: `js/script.js`
  },

  devtool: 'inline-source-map',

  plugins: [
    copy
  ]
};
