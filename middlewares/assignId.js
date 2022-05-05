module.exports = (req, res, next) => {
  req.id = __helper.uuid()
  next();
};
