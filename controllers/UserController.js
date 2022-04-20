const UserService = require('../services/UserService');

const getAll = async (req, res) => {
  const users = await UserService.getAll();

  return res.status(200).json(users);
};

module.exports = {
  getAll,
};
