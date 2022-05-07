const { BlogPost, User, Category, PostCategory } = require('../models');

const association = {
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
};

const getAll = async () => {
  const blogposts = await BlogPost.findAll(association);

  return blogposts;
};

const getById = async (id) => {
  const blogpost = await BlogPost.findOne({ ...association, where: { id } });

  return blogpost;
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
    console.log('Database error');
  }
};

const update = async (userId, postId, post) => {
  try {
    const blogpost = await getById(postId);

    if (blogpost.userId !== userId) return false;

    await BlogPost.update(post, { where: { id: postId } });
    await blogpost.reload();

    return blogpost;
  } catch (err) {
    console.log('Database error');
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
