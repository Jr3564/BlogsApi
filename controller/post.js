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

  return response.status(statusCode.OK).send(JSON.stringify(blogPosts));
});

const update = rescue(async (request, response) => {
  const { title, content } = request.body;
  const { id } = request.params;

  await BlogPost.update(
    { title, content },
    { where: { id } },
    { returning: true },
  );

  const blogPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ],
  });

  return response.status(statusCode.OK).send(blogPost);
});

const exclude = rescue(async (request, response) => {
  const { id } = request.params;

  const exist = await BlogPost.findByPk(id);

  if (!exist) {
    return response.status(statusCode.NOT_FOUND).send({ message: 'Post does not exist' });
  }

  await BlogPost.destroy({ where: { id } });

  return response.status(statusCode.NO_CONTENT).send();
});

module.exports = { create, findAll, findById, update, exclude };
