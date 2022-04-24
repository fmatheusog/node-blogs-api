const { categoryValidation } = require('../util');

const validateCategory = (req, res, next) => {
  const { name } = req.body;

  const valid = categoryValidation(name);
  if (valid !== true) return res.status(valid.code).json({ message: valid.message });

  next();
};

module.exports = validateCategory;