var path = require("path");
module.exports = function override(config, env) {
    config.devServer={
        contentBase: path.resolve(__dirname, './src'),
        host: 'ssulsday-app.herokuapp.com/',
        disableHostCheck: true
    }
    return config;
  }