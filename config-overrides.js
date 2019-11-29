var path = require("path");
module.exports = function override(config, env) {
    config.devServer={
        contentBase: path.resolve(__dirname, './src'),
        host: '0.0.0.0',
        disableHostCheck: true
    }
    return config;
  }