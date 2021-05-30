const rescue = require('express-rescue');
const { statusCode } = require('../utils');
const { User } = require('../models');

const create = rescue(async (request, response) => {
  const { displayName, email, password, image } = request.body;

  const user = await User.create({ displayName, email, password, image });

  return response.status(statusCode.CREATED).send(user);
});

const findAll = rescue(async (request, response) => {
  const users = await User.findAll();

  return response.status(statusCode.OK).send(users);
});

const findById = rescue(async (request, response) => {
  const { id } = request.params;

  const user = await User.findByPk(id);

  if (!user) {
    return response.status(statusCode.NOT_FOUND)
      .send({ message: 'User does not exist' });
  } 
    return response.status(statusCode.OK).send(user);
});

module.exports = { create, findAll, findById };
