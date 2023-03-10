const express = require('express');
const { authentication, validateUser } = require('../middlewares');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', authentication, UserController.getAll);
router.get('/:id', authentication, UserController.getById);
router.post('/', validateUser, UserController.create);

module.exports = router;