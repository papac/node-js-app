const auth = require("./auth");

// Base application configuration
module.exports = {
  auth: auth,
  port: process.env.APP_PORT,
  viewEngine: process.env.VIEW_ENGINE,
  viewDirectory: process.cwd() + "/frontend/views"
};
