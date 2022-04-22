const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return {
      message: 'Invalid fields',
    };
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, jwtConfig);
  return { token };
};

module.exports = {
  login,
};
