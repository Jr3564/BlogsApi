const status = require('./statusCode');

const response = (code, message) => ({
  message,
  code,
});

module.exports = { 
  NOT_FOUND: (message = '') => response(status.NOT_FOUND, message),
  BAD_REQUEST: (message) => response(status.BAD_REQUEST, message),
  USER_ALREADY_REGISTERED: (message) => response(status.CONFLICT, message),
};
