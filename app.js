global.__config = require('config');

const app = require('express')();

app.use(require('./routes/app.js'));

module.exports = app;