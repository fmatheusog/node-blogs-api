const express = require('express');
const { validateLogin } = require('../middlewares');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/', validateLogin, AuthController.login);

module.exports = router;