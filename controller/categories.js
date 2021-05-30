const rescue = require('express-rescue');
const { statusCode } = require('../utils');
const { Categorie } = require('../models');

const create = rescue(async (request, response) => {
  const { name } = request.body;

  if (!name) throw new Error('"name" is required');

  const categorie = await Categorie.create({ name });

  return response.status(statusCode.CREATED).send(categorie);
});

const findAll = rescue(async (request, response) => {
  const categories = await Categorie.findAll();

  return response.status(statusCode.OK).send(categories);
});

const findById = rescue(async (request, response) => {
  const { id } = request.params;

  const categorie = await Categorie.findByPk(id);

  if (!categorie) {
    return response.status(statusCode.NOT_FOUND)
      .send({ message: 'Categorie does not exist' });
  } 
    return response.status(statusCode.OK).send(categorie);
});

module.exports = { create, findAll, findById };
