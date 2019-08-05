const auth = require("./auth");
const view = require("./view");

// Base application configuration
module.exports = {
  auth: auth,
  port: process.env.APP_PORT,
  view: view
};
