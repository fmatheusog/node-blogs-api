const BlogPostService = require('../services/BlogPostService');

const getAll = async (_req, res) => {
  const blogposts = await BlogPostService.getAll();

  return res.status(200).json(blogposts);
};

module.exports = {
  getAll,
};