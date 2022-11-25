const express = require('express');
const router = express.Router();
const passwordsController = require('../controllers/passwordsController');

router.post('/', passwordsController.deletePassword);

module.exports = router;