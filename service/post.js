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

module.exports = { update };
