const userValidation = require('./validations/userValidation');
const loginValidation = require('./validations/loginValidation');
const categoryValidation = require('./validations/categoryValidation');
const { postValidation, postUpdateValidation } = require('./validations/postValidation');

module.exports = {
  userValidation,
  loginValidation,
  categoryValidation,
  postValidation,
  postUpdateValidation,
};
