const rescue = require('express-rescue');
const { validation } = require('../../service');

module.exports = rescue(async (request, _response, next) => {
  const { title, content, categoryIds } = request.body;

  validation.post.title(title);
  validation.post.content(content);
  validation.post.notEditCategoryId(categoryIds);

  next();
});
