require("dotenv").config();

module.exports = {
  env: {
    PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY
  },
  target: "serverless",
  // distDir already has .next as default
  distDir: ".next"
};
