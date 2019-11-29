var path = require("path");
module.exports = function override(config, env) {
    config.devServer={
<<<<<<< HEAD
        contentBase: path.resolve(__dirname, './src'),
        host: '0.0.0.0',
=======
>>>>>>> parent of 4fa4183... [master]/chore devServer host
        disableHostCheck: true
    }
    return config;
  }