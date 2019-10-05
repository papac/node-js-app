// see: https://github.com/winstonjs/winston
const winston = require('winston');
require('winston-daily-rotate-file');

const {
  createLogger,
  format,
  transports
} = require('winston');

const {
  combine,
  timestamp,
  label,
  printf
} = format;

// Create the custom log formats
const errorLogFormat = printf(({
  level,
  message,
  label,
  timestamp
}) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const accessLogFormat = printf(({
  message
}) => {
  return message;
});

const DailyRotateTransportErrorLog = new(transports.DailyRotateFile)({
  filename: require('path').join(__config.storage.log, 'app-%DATE%.log'),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const DailyRotateTransportAccessLog = new(transports.DailyRotateFile)({
  filename: require('path').join(__config.storage.log, 'access-%DATE%.log'),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = createLogger({
  format: combine(
    label({
      label: __config.appName
    }),
    timestamp(),
    errorLogFormat
  ),
  transports: [
    DailyRotateTransportErrorLog,
  ],
  exitOnError: false
});

const morgan = winston.createLogger({
  'level': 'info',
  format: accessLogFormat,
  transports: [
    DailyRotateTransportAccessLog
  ],
  exitOnError: false
});

if (__config.env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Create the stream writing for morgan http request logger
logger.stream = {
  write: function (message, encoding) {
    morgan.info(message);
  }
};

module.exports = logger;
