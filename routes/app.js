const express = require('express')
const router = express.Router();

// We load the controller here
const UserController = require("../controllers/UserController");

// Show index
router.get('/', UserController.index);

module.exports = router;
