const path = require(`path`);
const webpack = require(`webpack`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);

const copy = new CopyWebpackPlugin([{
  from: `./src`,
  to: `./`
}], {
  ignore: [
    `.DS_Store`,
    './js/script.js'
  ]
});

module.exports = {
  entry: {
    script: './src/js/script.js',
    santa: './src/js/santaScript.js'
  },

  output: {
    path: path.resolve(`./server/public`),
    filename: `js/[name].js`
  },

  devtool: 'inline-source-map',

  plugins: [
    copy
  ]
};
