const express = require('express');
const { authentication, validatePost, validatePostUpdate } = require('../middlewares');
const BlogPostController = require('../controllers/BlogPostController');

const router = express.Router();

router.get('/', authentication, BlogPostController.getAll);
router.get('/:id', authentication, BlogPostController.getById);
router.post('/', authentication, validatePost, BlogPostController.create);
router.put('/:id', authentication, validatePostUpdate, BlogPostController.update);

module.exports = router;