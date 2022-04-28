const { BlogPost, User, Category, PostCategory } = require('../models');

const getAll = async () => {
  const blogposts = await BlogPost.findAll({
    include: [
      { 
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return blogposts;
};

const create = async (userId, title, content, categoryIds) => {
  try {
    const newPost = await BlogPost.create({
      title,
      content,
      userId,
      published: new Date(),
      updated: new Date(),
    });
  
    Promise.all(
      categoryIds.map(async (category) => {
        await PostCategory.create({ postId: newPost.id, categoryId: category });
      }),
    );
  
    return newPost.id;
  } catch (err) {
    return { message: 'database error' };
  }
};

module.exports = {
  getAll,
  create,
};
