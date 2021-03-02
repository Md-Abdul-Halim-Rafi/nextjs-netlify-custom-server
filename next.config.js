const path = require("path");

module.exports = {
  // Target must be serverless
  target: "serverless",
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};
