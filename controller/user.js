const rescue = require('express-rescue');
const { statusCode } = require('../utils');
const { User } = require('../models');

const create = rescue(async (request, response) => {
  const { displayName, email, password, image } = request.body;

  const user = await User.create({ displayName, email, password, image })
    .catch((error) => console.log(`controller.user.create: ${error}`));

  return response.status(statusCode.CREATED).send(user);
});

module.exports = { create };
