const rescue = require('express-rescue');
const { statusCode } = require('../utils');
const { JWT } = require('../service');

module.exports = rescue(async (request, response) => {
  const { email, id } = request.user;

  const token = JWT.generateToken({ email, id });

  response.status(statusCode.OK).send({ token });
});
