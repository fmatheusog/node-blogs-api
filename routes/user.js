const express = require('express');
const { authentication } = require('../middlewares');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', authentication, UserController.getAll);

module.exports = router;