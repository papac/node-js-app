require('custom-env').env(true);

let app = require('./app');
let server;

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
  __debug(err.message);
});

// We catch the rejection exception cause by promise
// which is deprecated the other nodejs version
process.on('unhandledRejection', (err) => {
  __debug(err.message);
});

// We listen SIGTERM process signal
process.on('SIGTERM', (err) => {
  console.info('server shutdown at', new Date().toISOString());
  server.close((err) => {
    if (err) {
      __debug(err.message);
      process.exit(1);
    }
  })
});

// Error listener
server.on('error', (err) => {
  switch (err.errno) {
    case 'EADDRINUSE':
      __debug(`The port ${err.port} is already use`);
      break;
  }
})

// Launch the application server
server
	.listen(__config.port, () => {
    __debug(`Server start at ${__config.url}`);
  });
