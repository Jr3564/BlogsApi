const defineBlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    // userId
  },
  {
    sequelize, 
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPost.associate = (models) => {
    BlogPost.hasOne(models.User,
      { foreignKey: 'id', as: 'user' });
  };

  return BlogPost;
};

module.exports = defineBlogPostModel;
