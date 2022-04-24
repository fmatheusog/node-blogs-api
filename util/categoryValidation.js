const validateName = (name) => {
  if (!name) {
    return {
      code: 400,
      message: '"name" is required',
    };
  }

  return true;
};

const validateCategory = (name) => {
  if (validateName(name) !== true) return validateName(name);

  return true;
};

module.exports = validateCategory;
