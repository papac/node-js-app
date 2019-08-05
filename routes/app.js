const express = require('express')
const router = express.Router();

const UserController = require("../controllers/UserController");

// Show index
router.get('/', UserController.index);

module.exports = router;
