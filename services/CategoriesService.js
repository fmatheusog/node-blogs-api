const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const create = async (name) => {
  const category = await Category.create({ name });

  return category;
};

module.exports = {
  getAll,
  create,
};
