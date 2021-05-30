const rescue = require('express-rescue');
const { statusCode } = require('../../utils');
const { validation } = require('../../service');
const { User } = require('../../models');

module.exports = rescue(async (request, response, next) => {
  const { email, password } = request.body;

  try {
    validation.login.emailIsNotBlank(email);
    validation.login.passwordIsNotBlank(password);
    validation.login.email(email);
    validation.login.password(password);

    const user = await User.findOne({ where: { email } })
    .catch(({ message }) => console.log(`middleware.validation.login: ${message}`));

    if (!user) { throw new Error('Invalid fields'); }

    request.user = user;
  } catch ({ message }) {
    return response.status(statusCode.BAD_REQUEST).send({ message });
  }
    next();
});
