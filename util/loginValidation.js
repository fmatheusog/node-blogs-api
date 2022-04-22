const emailValidation = (email) => {
  if (!email) {
    return {
      code: 400,
      message: '"email" is required',
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
  
  return true;
};

const loginValidation = (email, password) => {
  if (emailValidation(email) !== true) return emailValidation(email);
  if (passwordValidation(password) !== true) return passwordValidation(password);

  return true;
};

module.exports = loginValidation;
