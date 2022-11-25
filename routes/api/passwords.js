const express = require('express');
const router = express.Router();
const passwordsController = require('../../controllers/passwordsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/:id')
    .get(passwordsController.getPassword)
    .post(verifyRoles(ROLES_LIST.User), passwordsController.createNewPassword)
    .put(verifyRoles(ROLES_LIST.User), passwordsController.updatePassword)
    .delete(verifyRoles(ROLES_LIST.User), passwordsController.deletePassword);

module.exports = router;