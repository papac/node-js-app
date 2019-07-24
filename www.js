const http = require('http');
const app = require('./app');

http.createServer(app)
	.listen(__config.port);