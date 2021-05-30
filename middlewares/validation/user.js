const rescue = require('express-rescue');
const { statusCode } = require('../../utils');
const { validation } = require('../../service');
const { User } = require('../../models');

module.exports = rescue(async (request, response, next) => {
  const { displayName, email, password } = request.body;

  try {
    validation.user.displayName(displayName);
    validation.user.email(email);
    validation.user.isValidEmail(email);
    validation.user.password(password);
    validation.user.isPasswordValid(password);
  } catch ({ message }) {
    return response.status(statusCode.BAD_REQUEST).send({ message });
  }

  const user = await User.findOne({ where: { email } })
    .catch(({ message }) => console.log(`controller.login: ${message}`));

  if (!user || user.password !== password) {
    response.status(statusCode.BAD_REQUEST).send({ message: 'Invalid fields' });
  }
  
  request.user = user;

  next();
});
