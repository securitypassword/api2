const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');

router.route('/')
    .get(adminController.getAllAdmin)
    .post(verifyRoles(ROLES_LIST.Admin), adminController.createNewAdmin)
    .put(verifyRoles(ROLES_LIST.Admin), adminController.updateAdmin)
    .delete(verifyRoles(ROLES_LIST.Admin), adminController.deleteAdmin);

router.route('/:id')
    .get(adminController.getAdmin);

module.exports = router;