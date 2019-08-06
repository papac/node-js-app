const auth = require("./auth");
const view = require("./view");
const certificate = require("./certificate");
const session = require("./session");

// Prevent for update
const config = {
  auth: auth,
  port: process.env.APP_PORT,
  view: view,
  certificate: certificate,
  session: session
};

// Base application configuration
module.exports = config;
