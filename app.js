// Optimisation of configuration loader
global.__config = require('config');

const glob = require("glob");
const app = require('express')();

// We load the request parse
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine
app.set("view engine", __config.view.engine);
app.set("views", __config.view.directory);

app.use();

// Load application route
glob("./routes/*.js", function (er, files) {
  files.forEach(file => {
    app.use(require(file));
  });
});

module.exports = app;
