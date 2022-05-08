const authentication = require('./authentication');

// Validations
const validateUser = require('./validateUser');
const validateLogin = require('./validateLogin');
const validateCategory = require('./validateCategory');
const { validatePost, validatePostUpdate } = require('./validatePost');

module.exports = {
  authentication,
  validateUser,
  validateLogin,
  validateCategory,
  validatePost,
  validatePostUpdate,
};
