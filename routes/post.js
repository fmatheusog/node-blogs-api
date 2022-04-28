const express = require('express');
const { authentication, validatePost } = require('../middlewares');
const BlogPostController = require('../controllers/BlogPostController');

const router = express.Router();

router.get('/', authentication, BlogPostController.getAll);
router.post('/', authentication, validatePost, BlogPostController.create);

module.exports = router;