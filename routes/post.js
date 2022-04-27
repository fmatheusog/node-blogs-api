const express = require('express');
const { authentication } = require('../middlewares');
const BlogPostController = require('../controllers/BlogPostController');

const router = express.Router();

router.get('/', authentication, BlogPostController.getAll);

module.exports = router;