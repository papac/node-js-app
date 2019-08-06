// See: https://www.npmjs.com/package/express-session
module.exports = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    domain: process.env.SESSION_DOMAIN,
    secure: process.env.SESSION_SECURE,
    maxAge: process.env.SESSION_DURATION,
    httpOnly: process.env.SESSION_HTTP_ONLY
  }
}
