const rescue = require('express-rescue');
const { statusCode } = require('../utils');
const { BlogPost, PostsCategorie } = require('../models');

const create = rescue(async (request, response) => {
  const { title, content, categoryIds } = request.body;
  const { id: userId } = request.user;

  const creates = categoryIds.map((id) => (
    PostsCategorie.create({ userId, id })
  ));

  Promise.all(creates);

  const { dataValues } = await BlogPost.create({ title, content });

  console.log({ ...dataValues, userId });
  return response.status(statusCode.CREATED).send({ ...dataValues, userId });
});

const findAll = rescue(async (request, response) => {
  const blogPosts = await BlogPost.findAll();

  return response.status(statusCode.OK).send(blogPosts);
});

module.exports = { create, findAll };
