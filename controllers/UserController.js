const UserService = require('../services/UserService');

const getAll = async (req, res) => {
  const users = await UserService.getAll();

  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await UserService.getById(id);

  if (user.message) return res.status(404).json({ message: user.message });
  return res.status(200).json(user);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await UserService.create({ displayName, email, password, image });

  if (user.message) return res.status(409).json({ message: user.message });
  return res.status(201).json({ token: user.token });
};

module.exports = {
  getAll,
  getById,
  create,
};
