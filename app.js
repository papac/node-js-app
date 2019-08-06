// Optimisation of configuration loader
global.__config = require('config');
global.__helper = require('./helpers');
global.__debug = require("debug")("app");
global.__ = require('i18n');

// MongoDB configuration
// const mongoose = require('mongoose');
// mongoose.connect(__config.mongodb, {useNewUrlParser: true}, (err) => {
//   if (err) {
//     throw err;
//   }
//   __debug('MongoDB Connected');
// });

// See: https://www.npmjs.com/package/i18n
__.configure({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  directory: __dirname + '/frontend/lang'
});

const glob = require("glob");
const app = require('express')();

// We load the request parse
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(__config.session));
app.use(__.init);

// Set the view engine
app.set("view engine", __config.view.engine);
app.set("views", __config.view.directory);

// Load application route
glob("./routes/*.js", (error, files) => {
  if (error) {
    throw error;
  }

  // We load the application route
  files.forEach(file => {
    app.use(require(file));
  });
});

module.exports = app;
