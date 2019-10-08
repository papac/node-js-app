const User = require('../models/userModel');

/**
 * Create the new users
 *
 * @param {Object} data
 * @returns {*}
 */
const create = async (data) => {
  try {
    let user = new User(data);
    return await user.save();
  } catch (e) {
    throw {
      message: e.message,
      code: 500
    }
  }
};

/**
 * Delete user
 *
 * @param {Number} id
 * @returns {*}
 */
const remove = async (id) => {
  try {
    return await User.deleteOne({
      _id: id
    });
  } catch (e) {
    throw {
      message: e.message,
      code: 500
    };
  }
};

/**
 * Get user by filter
 * 
 * @param {Object} condition
 * @param {Object} projection
 * @returns {Object}
 * @throws Error
 */
const find = async (condition, projection = {}) => {
  try {
    if (!__helper.isObject(condition)) {
      throw new Error('userService.find: condition must be object');
    }
    projection['__v'] = 0;
    return await User.find(condition, projection);
  } catch (e) {
    throw e;
  }
};

/**
 * Get one user by filter
 * 
 * @param {Object} condition
 * @param {Object} projection
 * @returns {Object}
 */
const findOne = async (condition, projection = {}) => {
  try {
    if (!__helper.isObject(condition)) {
      throw new Error('userService.findOne: condition must be object');
    }
    projection['__v'] = 0;
    return await User.findOne(condition, projection);
  } catch (e) {
    throw e;
  }
};

/**
 * Get all user
 * 
 * @param {Object} projection
 * @returns {Array<Object>}
 */
const all = async (projection = {}) => {
  try {
    projection['__v'] = 0;
    let users = await User.find({}, projection);
    return users.map(user => {
      user.fullName = user.name + " " + user.lastname;
      return user;
    });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  create,
  remove,
  all,
  find,
  findOne
};
