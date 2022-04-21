const { checkEmailFormat } = require('./index');

const nameValidation = (name) => {
  if (name && name.length < 8) {
    return {
      code: 400,
      message: '"displayname" length must be at least 8 characters long',
    };
  }

  return true;
};

const emailValidation = (email) => {
  if (!email) {
    return {
      code: 400,
      message: '"email" is required',
    };
  }

  if (checkEmailFormat(email) !== true) {
    return {
      code: 400,
      message: '"email" must be a valid email',
    };
  }

  return true;
};

const passwordValidation = (password) => {
  if (!password) {
    return {
      code: 400,
      message: '"password" is required',
    };
  }

  if (password.lenght !== 6) {
    return {
      code: 400,
      message: '"password" length must be 6 characters long',
    };
  }

  return true;
};

const userValidation = (user) => {
  if (nameValidation(user.displayName) !== true) return nameValidation(user.displayName);
  if (emailValidation(user.email) !== true) return emailValidation(user.email);
  if (passwordValidation(user.password) !== true) return passwordValidation(user.password);

  return true;
};

module.exports = userValidation;