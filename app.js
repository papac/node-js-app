global.__config = require('config');

const glob = require("glob");
const app = require('express')();

// Set the view engine
app.set("view engine", __config.viewEngine);
app.set("views", __config.viewDirectory);

glob("./routes/*.js", function (er, files) {
  files.forEach(file => {
    app.use(require(file));
  });
});

module.exports = app;
