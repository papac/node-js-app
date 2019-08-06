const BaseController = require("./baseController");
const User = require("../models/userModel");

class UserController extends BaseController {
	/**
	 * Show the get started message
	 * 
	 * @param  {Object} res The server request
	 * @param  {Object} req The server response
   * @return {*}
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
