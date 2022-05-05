const express = require('express');
const router = express.Router();

// We load the controller here
const userController = require("../controllers/userController");
const validation = require("../validations/UserValidation");

// Show index
router.get("/", userController.index);
router.post("/create", validation.create, userController.create);

router.get('/users', userController.showAll);
router.get('/users/:id', userController.show);
router.delete('/users/:id', userController.delete);

module.exports = router;
