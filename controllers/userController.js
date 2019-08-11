const BaseController = require("./baseController");
const User = require("../models/userModel");

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
  show(req, res) {
    let { id } = req.params;
    User.findOne({_id: id}, (err, user) => {
      if (err) {
        throw err;
      }

      res.send(user);
    });
  }

  /**
   * Create the new user
   * 
   * @param {Object} req
   * @param {Ibject} res
   * @return {*}
   */
  create(req, res) {
    let user = new User(req.body);
    user.save(err => {
      if (err) {
        throw err;
      }

      res.send({
        message: "User created",
        user: user
      });
    });
  }

  /**
   * Create the new user
   * 
   * @param {Object} req
   * @param {Ibject} res
   * @return {*}
   */
  delete(req, res) {
    let { id } = req.params;
    User.deleteOne({_id: id}, (err, user) => {
      if (err) {
        throw err;
      }

      res.send({
        message: 'User deleted'
      });
    });
  }
}

// Optimize class loader
let instance;

if (!(typeof instance instanceof UserController)) {
  instance = new UserController;
}

module.exports = instance;
