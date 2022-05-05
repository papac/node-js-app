const express = require('express');
const router = express.Router();

// We load the controller here
const userController = require("../controllers/user.controller");
const validation = require("../validations/user.validation");

// Show index
router.get("/", userController.index);
router.post("/create", validation.create, userController.create);

router.get('/users', userController.showAll);
router.get('/users/:id', userController.show);
router.delete('/users/:id', userController.delete);

module.exports = router;
