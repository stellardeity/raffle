/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
  };
  config.resolve.alias = {
    ...config.alias,
    "@": path.resolve(__dirname, "src"),
  };
  config.plugins = [...config.plugins];
  config.experiments = {
    ...config.experiments,
    topLevelAwait: true,
  };
  return config;
};
