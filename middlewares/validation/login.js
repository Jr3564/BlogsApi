const rescue = require('express-rescue');
const { validation } = require('../../service');
const { User } = require('../../models');

module.exports = rescue(async (request, _response, next) => {
  const { email, password } = request.body;

  validation.login.emailIsNotBlank(email);
  validation.login.passwordIsNotBlank(password);
  validation.login.email(email);
  validation.login.password(password);

  const user = await User.findOne({ where: { email } });

  if (!user) { throw new Error('Invalid fields'); }

  request.user = user;

  next();
});
