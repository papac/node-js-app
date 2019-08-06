const auth = require("./auth");
const view = require("./view");
const certificate = require("./certificate");
const session = require("./session");

// Prevent for update
const config = {
  url: process.env.APP_URL,
  withHttps: process.env.APP_HTTPS == 'yes',
  auth: auth,
  port: process.env.APP_PORT,
  view: view,
  certificate: certificate,
  session: session,
  mongodb: process.env.MONGO_URL
};

// Base application configuration
module.exports = config;
