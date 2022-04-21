const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'token not found' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'expired or invalid token' });
  }
};

module.exports = authentication;