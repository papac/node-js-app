module.exports = (req, res, next) => {
  res.status(404);
  res.render('errors/404');
};
