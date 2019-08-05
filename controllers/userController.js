const BaseController = require("./baseController");

class UserController extends BaseController {
	/**
	 * Show the get started message
	 * 
	 * @param {Object} res
	 * @param {Object} req
	 * @return {void}
	 */
	index(req, res) {
		res.render("app");
	}
}

// Optimize class loader
let instance;

if (!(typeof instance instanceof UserController)) {
	instance = new UserController;
}

module.exports = instance;
