const rescue = require('express-rescue');
const { statusCode } = require('../../utils');
const { BlogPost } = require('../../models');

module.exports = rescue(async (request, response, next) => {
  const { id } = request.params;

  const { userId } = await BlogPost.findByPk(id) || { userId: false };

  if (request.user.id !== userId && userId) {
    return response.status(statusCode.UNAUTHORIZED)
      .send({ message: 'Unauthorized user' });
  }

  next();
});
