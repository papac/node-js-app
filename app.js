// Optimisation of configuration loader
global.__config = require('config');
global.__helper = require('./helpers');
global.__logger = require('./services/loggerService');
global.__ = require('i18n');

// Util package
const path = require('path');

// MongoDB configuration
const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.connect(__config.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
=======
mongoose.connect(__config.mongodb, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
>>>>>>> 89e3a9e... Update app.js
  if (err) {
    throw err;
  }
  __logger.info('MongoDB Connected');
});

// See: https://www.npmjs.com/package/i18n
__.configure({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  directory: path.join(__dirname, 'frontend/lang')
});

const glob = require("glob");
const app = require('express')();

// We load the request parse and init package
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const assignToRequestId = require('./middlewares/assignId');
const helmet = require('helmet');

app.use(helmet());
app.use(assignToRequestId);
app.use(morgan('combined', {
  stream: __logger.stream
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session(__config.session));
app.use(__.init);

// Set the view engine
if (__config.withViewEngine) {
  app.set("view engine", __config.view.engine);
  app.set("views", __config.view.directory);
}

// Load application route
glob("./routes/*.js", (error, files) => {
  if (error) {
    throw error;
  }

  // We load the application route
  files.forEach(file => {
    app.use(require(file));
  });
}).on('end', () => {
  // We bind a 404 catcher
  app.use(require('./middlewares/404.js'));
  // app.use(require('./middlewares/error.js'));
});

module.exports = app;
