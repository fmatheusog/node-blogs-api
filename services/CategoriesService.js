const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const create = async (name) => {
  const category = await Category.create({ name });
  
  return category;
};

const validateCategories = async (categories) => Promise.all(categories.map(async (cat) => {
  const result = await Category.findOne({ where: { id: cat } });
  return result;
}));

module.exports = {
  getAll,
  create,
  validateCategories,
};
