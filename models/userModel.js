const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => {
      return Date.now()
    }
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now()
    }
  },
});

// Optimise the class loader
let modelClass;
if (typeof instance === "undefined") {
  modelClass = mongoose.model('User', User, 'users');
}

module.exports = modelClass;
