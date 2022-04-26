const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const blogposts = await BlogPost.findAll({
    include: [
      { 
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
  });

  return blogposts;
};

module.exports = {
  getAll,
};
