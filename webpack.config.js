const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: './src/js/script.js',

  output: {
    path: path.resolve(`./dist`),
    filename: `js/script.js`,
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: `./src`,
    historyApiFallback: true,
    hot: true,
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
