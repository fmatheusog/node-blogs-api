const AuthService = require('../services/AuthService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const response = await AuthService.login(email, password);

  if (response.message) return res.status(400).json({ message: response.message });
  return res.status(200).json({ token: response.token });
};

module.exports = {
  login,
};
