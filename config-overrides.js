module.exports = function override(config, env) {
    config.devServer={
        host: '0.0.0.0',
        disableHostCheck: true
    }
    return config;
  }