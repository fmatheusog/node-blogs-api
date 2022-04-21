const { userValidation } = require('../util');

const validateUser = (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const valid = userValidation({ displayName, email, password, image });
  if (valid !== true) return res.status(valid.code).json({ message: valid.message });

  next();
};

module.exports = validateUser;