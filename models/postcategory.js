module.exports = (Sequelize, _DataTypes) => {
  const PostCategory = Sequelize.define('PostCategory', {}, { 
    tableName: 'PostsCategories', timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      through: 'PostCategory',
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId',
      through: 'PostCategory',
      as: 'blogposts',
    });
  };

  return PostCategory;
};
