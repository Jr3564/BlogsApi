const rescue = require('express-rescue');
const { statusCode } = require('../../utils');
const { validation } = require('../../service');
const { User } = require('../../models');

module.exports = rescue(async (request, response, next) => {
  const { displayName, email, password } = request.body;

  validation.user.displayName(displayName);
  validation.user.email(email);
  validation.user.isValidEmail(email);
  validation.user.password(password);
  validation.user.isPasswordValid(password);

  const user = await User.findOne({ where: { email } });

  if (user) {
    const message = 'User already registered';
    return response.status(statusCode.CONFLICT).send({ message });
  }

  next();
});