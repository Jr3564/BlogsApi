const rescue = require('express-rescue');
const { statusCode } = require('../utils');
const { JWT } = require('../service');

module.exports = rescue(async (request, response) => {
  const { email } = request.user;

  const token = JWT.generateToken({ email });

  response.status(statusCode.OK).send({ token });
});
