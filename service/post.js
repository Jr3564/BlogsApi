const { Op } = require('sequelize');
const validation = require('./validation');
const { BlogPost, User, Categorie } = require('../models');

const update = async ({ id, title, content, categoryIds }) => {
  validation.post.title(title);
  validation.post.content(content);
  validation.post.notEditCategoryId(categoryIds);

  const result = await BlogPost.update(
    { title, content },
    { where: { id } },
    { returning: true },
  );
  console.log(result);

  const blogPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ],
  });
  
  return blogPost;
};

const search = (query) => {
  if (!query) {
    return BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Categorie, as: 'categories' },
      ],
    });
  }

  return BlogPost.findAll({
    where: { [Op.or]: [
      { title: query },
      { content: query },
    ] },
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ],
  });
};

module.exports = { update, search };
