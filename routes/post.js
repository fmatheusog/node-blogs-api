const express = require('express');
const BlogPostController = require('../controllers/BlogPostController');

const router = express.Router();

router.get('/', BlogPostController.getAll);

module.exports = router;