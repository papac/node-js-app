const auth = require("./auth.config");
const view = require("./view.config");
const certificate = require("./certificate.config");
const storage = require("./storage.config");
const session = require("./session.config");

// Prevent for update
const config = {
  env: process.env.APP_ENV,
  url: process.env.APP_URL,
  withHttps: process.env.APP_HTTPS === 'yes',
  auth: auth,
  port: process.env.APP_PORT || '5000',
  view: view,
  certificate: certificate,
  session: session,
  mongodb: process.env.MONGO_URL,
  withViewEngine: process.env.WITH_VIEW_LOADING === 'yes',
  storage: storage,
  appName: process.env.APP_NAME
};

// Base application configuration
module.exports = config;
