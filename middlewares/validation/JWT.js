const rescue = require('express-rescue');
const service = require('../../service');

module.exports = rescue(async (request, _response, next) => {
  const token = request.headers.authorization;

  const { data } = service.JWT.decode(token);

  request.user = data;

  next();
});