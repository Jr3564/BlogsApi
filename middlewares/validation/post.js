const rescue = require('express-rescue');
const { validation } = require('../../service');
const { Categorie } = require('../../models');

module.exports = rescue(async (request, _response, next) => {
  const { title, content, categoryIds } = request.body;

  validation.post.title(title);
  validation.post.content(content);
  validation.post.categoryIds(categoryIds);

  const categories = await Categorie.findAll();
  const ids = categories.map(({ dataValues }) => dataValues.id);

  if (!categoryIds.every((id) => ids.includes(id))) {
    throw new Error('"categoryIds" not found');
  }

  next();
});