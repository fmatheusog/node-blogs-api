const { loginValidation } = require('../util');

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const valid = loginValidation(email, password);
  if (valid !== true) return res.status(valid.code).json({ message: valid.message });

  next();
};

module.exports = validateLogin;
