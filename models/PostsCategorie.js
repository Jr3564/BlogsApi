const definePostsCategorieModel = (sequelize, _DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie', {}, { timestamps: false });

  PostsCategorie.associate = (models) => {
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts', 
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherkey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories', 
      through: PostsCategorie,
      foreignKey: 'postId',
      otherkey: 'categoryId',
    });
  };
  return PostsCategorie;
};

module.exports = definePostsCategorieModel;
