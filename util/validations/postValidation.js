const validateTitle = (title) => {
  if (!title) {
    return {
      message: '"title" is required',
    };
  }

  return true;
};

const validateContent = (content) => {
  if (!content) {
    return {
      message: '"content" is required',
    };
  }

  return true;
};

const validateCategoryIds = (categoryIds) => {
  if (!categoryIds) {
    return {
      message: '"categoryIds" is required',
    };
  }

  return true;
};

const postValidation = (title, content, categoryIds) => {
  if (validateTitle(title) !== true) return validateTitle(title);
  if (validateContent(content) !== true) return validateContent(content);
  if (validateCategoryIds(categoryIds) !== true) return validateCategoryIds(categoryIds);

  return true;
};

module.exports = postValidation;