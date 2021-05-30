const { statusCode } = require('../../utils');

module.exports = ({ message }, _req, response, _next) => response.status(statusCode.BAD_REQUEST)
.json({ message });
