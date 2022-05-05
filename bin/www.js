require('custom-env').env(true);

let server;
const app = require('../app');

if (__config.withHttps) {
  const https = require('https');
  const fs = require('fs');
  const options = {
    // key: fs.readFileSync(__config.certificate.key),
    // cert: fs.readFileSync(__config.certificate.cert)
  };

  // We create the server
  server = https.createServer(options, app);
} else {
  const http = require('http');
  // We create the server
  server = http.createServer(app)
}

// We catch the error exception throw in
// application
process.on('uncaughtException', (err) => {
  __logger.error(err.message);
});

// We catch the rejection exception cause by promise
// which is deprecated the other nodejs version
process.on('unhandledRejection', (reason, promise) => {
  __logger.error(reason);
});

// We listen SIGTERM process signal for close server process gracefully
process.on('SIGTERM', (err) => {
  __logger.info('server shutdown at', new Date().toISOString());
  server.close((err) => {
    if (err) {
      __logger.error(err.message);
      process.exit(1);
    }
  });
});

// Error listener
server.on('error', (err) => {
  switch (err.errno) {
    case 'EADDRINUSE':
      __logger.info(`The port ${err.port} is already use`);
      break;
  }
});

// Launch the application server
server
	.listen(__config.port, () => {
    __logger.info(`Server start at ${__config.url}`);
  });
