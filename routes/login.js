const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const loginRouter = express.Router();

loginRouter.route('/')
  .post(middleware.validation.login, controller.login);

loginRouter.use(middleware.error.badRequest);

module.exports = loginRouter;
