const express = require('express')
const route = express.Route();

route.get('/', 'UserController.index');

module.exports = route;