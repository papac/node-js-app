const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new mongoose.Schema({
	name: {
		type: String,
	},
	lastname: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: () => {
			return Date.now()
		}
	},
});

module.exports = new mongoose.model('User', User, 'users');