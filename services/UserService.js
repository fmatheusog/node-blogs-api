const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const { User } = require('../models');

const getAll = async () => {
  const users = User.findAll({ 
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return {
      message: 'User does not exist',
    };
  }

  return user;
};

const create = async ({ displayName, email, password, image }) => {  
  const usedEmail = await User.findOne({ where: { email } });

  if (usedEmail) return { message: 'User already registered' };
  
  const user = await User.create({
    displayName, email, password, image,
  });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, jwtConfig);

  return { token };
};

module.exports = {
  getAll,
  getById,
  create,
};
