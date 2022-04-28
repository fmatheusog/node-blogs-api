const authentication = require('./authentication');

// Validations
const validateUser = require('./validateUser');
const validateLogin = require('./validateLogin');
const validateCategory = require('./validateCategory');
const validatePost = require('./validatePost');

module.exports = {
  authentication,
  validateUser,
  validateLogin,
  validateCategory,
  validatePost,
};
