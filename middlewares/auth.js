module.exports = (req, res, next) => {
	if (req.session.auth) {
		return next();
	}

	return res.redirect(__config.authRedirectTo);
};