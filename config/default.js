const auth = require("./auth");
const view = require("./view");
const certificate = require("./certificate");

// Base application configuration
module.exports = {
  auth: auth,
  port: process.env.APP_PORT,
  view: view,
  certificate: certificate
};
