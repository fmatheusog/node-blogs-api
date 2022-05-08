const CategoryService = require('../services/CategoriesService');
const { postValidation, postUpdateValidation } = require('../util');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const valid = postValidation(title, content, categoryIds);
  if (valid !== true) return res.status(400).json({ message: valid.message });

  const checkCategories = await CategoryService.validateCategories(categoryIds);
  if (checkCategories.every((cat) => cat !== null) === false) {
    return res.status(400).json({
        message: '"categoryIds" not found',
    });
  }
  next();
};

const validatePostUpdate = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (categoryIds) {
    return res.status(400).json({
      message: 'Categories cannot be edited',
    });
  }

  const valid = postUpdateValidation(title, content);
  if (valid !== true) return res.status(400).json({ message: valid.message });

  next();
};

module.exports = {
  validatePost,
  validatePostUpdate,
};
