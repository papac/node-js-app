const BaseController = require("./baseController");
const User = require("../models/userModel");
const UserService = require('../services/userService');

class UserController extends BaseController {
  /**
   * Show the get started message
   *
   * @param  {Object} res
   * @param  {Object} req
   * @return {*}
   */
  index(req, res) {
    res.render("app");
  }

  /**
   * Get one user
   *
   * @param {Object} req
   * @param {Object} res
   * @return {*}
   */
  async show(req, res) {
    let { id } = req.params;
    let user = await UserService.findOne({_id: id});
    res.send(user);
  }

  /**
   * Show all user
   * 
   * @param {Object} req 
   * @param {Object} res
   * @return {*}
   */
  async showAll(req, res) {
    let users = await UserService.all();
    res.send(users);
  }

  /**
   * Create the new user
   *
   * @param {Object} req
   * @param {Object} res
   * @return {*}
   */
  async create(req, res) {
    let user = await UserService.create(req.body);
    res.send({
      message: "User created",
      user: user
    });
  }

  /**
   * Create the new user
   *
   * @param {Object} req
   * @param {Object} res
   * @return {*}
   */
  async delete(req, res) {
    let {
      id
    } = req.params;
    await User.remove(id);
    res.send({
      message: 'User deleted'
    });
  }
}

// Optimize class loader
let instance;

if (!(typeof instance instanceof UserController)) {
  instance = new UserController;
}

module.exports = instance;
