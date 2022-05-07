const BlogPostService = require('../services/BlogPostService');

const getAll = async (_req, res) => {
  const blogposts = await BlogPostService.getAll();

  return res.status(200).json(blogposts);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const blogpost = await BlogPostService.getById(id);
  
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

const update = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const userId = req.auth.id;
  const updatedPost = await BlogPostService.update(userId, id, { title, content });

  if (updatedPost === false) return res.status(401).json({ message: 'Unauthorized user' });
  return res.status(200).json(updatedPost);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};