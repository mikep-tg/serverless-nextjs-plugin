// const withCSS = require("@zeit/next-css");

const config = {
  target: "serverless",
  assetPrefix: "https://s3.amazonaws.com/mike-test-bkt-2",
};

// module.exports = withCSS(config);
module.exports = config;
