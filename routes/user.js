const express = require('express')
const router = express.Router();

// We load the controller here
const UserController = require("../controllers/userController");
const UserValidation = require('../validations/UserValidation');

// Show index
router.get('/', UserController.index);
router.post('/create', UserValidation, UserController.create);

router.get('/users', UserController.showAll);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.delete);

module.exports = router;
