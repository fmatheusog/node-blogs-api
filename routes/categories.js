const express = require('express');
const CategoriesController = require('../controllers/CategoriesController');
const { authentication, validateCategory } = require('../middlewares');

const router = express.Router();

router.get('/', authentication, CategoriesController.getAll);
router.post('/', authentication, validateCategory, CategoriesController.create);

module.exports = router;
