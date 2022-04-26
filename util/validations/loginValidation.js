const emailValidation = (email) => {
  if (email === undefined) {
    return {
      code: 400,
      message: '"email" is required',
    };
  }

  if (email === '') {
    return {
      code: 400,
      message: '"email" is not allowed to be empty',
    };
  }

  return true;
};

const passwordValidation = (password) => {
  if (password === undefined) {
    return {
      code: 400,
      message: '"password" is required',
    };
  }

  if (password === '') {
    return {
      code: 400,
      message: '"password" is not allowed to be empty',
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
