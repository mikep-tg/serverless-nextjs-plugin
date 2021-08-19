const withCSS = require("@zeit/next-css");

const config = {
  target: "serverless",
  assetPrefix: "https://s3.amazonaws.com/mike-test-bkt",
};

module.exports = withCSS(config);
