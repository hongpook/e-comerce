const express = require('express');
const router = express.Router();
const UserAdminController = require('../controller/userAdminControllers');

router.post('/UserAdmins', UserAdminController.createUserAdmin);
router.get('/UserAdmins', UserAdminController.getAllUserAdmins);
router.get('/UserAdmins/:id', UserAdminController.getUserAdminById);
router.put('/UserAdmins/:id', UserAdminController.updateUserAdmin);
router.delete('/UserAdmins/:id', UserAdminController.deleteUserAdmin);

module.exports = router;
