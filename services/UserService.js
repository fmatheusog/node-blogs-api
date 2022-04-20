const { User } = require('../models');

const getAll = async () => {
  const users = User.findAll({ 
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = {
  getAll,
};
