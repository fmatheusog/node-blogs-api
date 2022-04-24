module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false });

  return Category;
};
