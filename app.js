// Optimisation of configuration loader
global.__config = require('config');

const glob = require("glob");
const app = require('express')();

// Set the view engine
app.set("view engine", __config.view.engine);
app.set("views", __config.view.directory);

// Load application route
glob("./routes/*.js", function (er, files) {
  files.forEach(file => {
    app.use(require(file));
  });
});

module.exports = app;
