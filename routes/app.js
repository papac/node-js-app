const express = require('express')
const router = express.Router();

// We load the controller here
const UserController = require("../controllers/userController");

// Show index
router.get('/', UserController.index);

module.exports = router;
