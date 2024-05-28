var express = require("express");
const router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.get('/allUsers', userController.getAllUsers);
router.post("/createuser", userController.createUser);
router.post("/fatchuser", userController.fatchUser);

module.exports = router;
