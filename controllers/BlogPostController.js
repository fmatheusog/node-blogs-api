const BlogPostService = require('../services/BlogPostService');

const getAll = async (_req, res) => {
  const blogposts = await BlogPostService.getAll();

  return res.status(200).json(blogposts);
};

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.auth.id;
  const newPost = await BlogPostService.create(userId, title, content, categoryIds);

  return res.status(201).json({
    id: newPost,
    userId,
    title,
    content,
  });
};

module.exports = {
  getAll,
  create,
};