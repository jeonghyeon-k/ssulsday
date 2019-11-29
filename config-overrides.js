module.exports = function override(config, env) {
    config.devServer={
        disableHostCheck: true
    }
    return config;
  }