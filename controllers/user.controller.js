const BaseController = require("./base.controller");
const User = require("../models/user.model");
const UserService = require('../services/user.service');

class UserController extends BaseController {
  /**
   * Show the get started message
   *
   * @param  {Object} req
   * @param  {Object} res
   * @return {*}
   */
  index(req, res) {
    return res.render("app");
  }

  /**
   * Get one user
   *
   * @param {Object} req
   * @param {Object} res
   * @return {*}
   */
  async show(req, res) {
    const { id } = req.params;
    const user = await UserService.findOne({_id: id});
    return res.send(user);
  }

  /**
   * Show all user
   * 
   * @param {Object} req 
   * @param {Object} res
   * @return {*}
   */
  async showAll(req, res) {
    const users = await UserService.all();
    return res.send(users);
  }

  /**
   * Create the new user
   *
   * @param {Object} req
   * @param {Object} res
   * @return {*}
   */
  async create(req, res) {
    const user = await UserService.create(req.body);
    return res.send({
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
    const { id } = req.params;
    await User.remove(id);
    return res.send({
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
