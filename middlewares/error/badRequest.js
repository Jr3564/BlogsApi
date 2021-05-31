const { statusCode } = require('../../utils');

module.exports = ({ message }, _req, response, _next) => {
  console.log(message);
  return response.status(statusCode.BAD_REQUEST)
    .json({ message });
};
