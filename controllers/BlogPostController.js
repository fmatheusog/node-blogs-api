const BlogPostService = require('../services/BlogPostService');

const getAll = async (_req, res) => {
  const blogposts = await BlogPostService.getAll();

  return res.status(200).json(blogposts);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const blogpost = await BlogPostService.getById(id);
  console.log(blogpost);
  
  if (blogpost === null) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(blogpost);
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
  getById,
  create,
};