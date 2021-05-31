const rescue = require('express-rescue');
const { statusCode } = require('../utils');
const { BlogPost, PostsCategorie, User, Categorie } = require('../models');

const create = rescue(async (request, response) => {
  const { title, content, categoryIds } = request.body;
  const { id: userId } = request.user;

  const { dataValues: blogPost } = await BlogPost.create({ title, content, userId });

  Promise.all(
    categoryIds.map((categoryId) => (
      PostsCategorie.create({ categoryId, postId: blogPost.id })
    )),
  );

  return response.status(statusCode.CREATED).json({ ...blogPost, userId });
});

const findAll = rescue(async (_request, response) => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ],
  });

  return response.status(statusCode.OK).send(JSON.stringify(blogPosts));
});

const findById = rescue(async (request, response) => {
  const { id } = request.params;
  const blogPosts = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ],
  });

  if (!blogPosts) {
    return response.status(statusCode.NOT_FOUND).send({ message: 'Post does not exist' });
  }
  console.log(blogPosts);
  return response.status(statusCode.OK).send(JSON.stringify(blogPosts));
});

module.exports = { create, findAll, findById };
