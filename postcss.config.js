module.exports = {
  plugins: [
    require(`postcss-reporter`)({clearMessages: true}), // prettier stylelint reporting
    require(`postcss-cssnext`)
  ]
};
