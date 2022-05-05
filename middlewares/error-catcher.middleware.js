module.exports = (err, req, res, next) => {
  res.render('errors/500', {message: err});
};
