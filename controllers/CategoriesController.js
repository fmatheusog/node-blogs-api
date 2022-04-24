const CategoriesService = require('../services/CategoriesService');

const getAll = async (req, res) => {
  const categories = await CategoriesService.getAll();

  return res.status(200).json(categories);
};

const create = async (req, res) => {
  const { name } = req.body;

  const category = await CategoriesService.create(name);

  return res.status(201).json(category);
};

module.exports = {
  getAll,
  create,
};
