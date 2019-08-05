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

  /**
   * Create the new user
   * 
   * @param  {Object} req The server request
   * @param  {Object} res The server response
   * @return {*}
   */
  async create(req, res) {
    // This the test. It not work great.
    let user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });

    let response = await user.save();
  }
}

// Optimize class loader
let instance;

if (!(typeof instance instanceof UserController)) {
	instance = new UserController;
}

module.exports = instance;
