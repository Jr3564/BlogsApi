const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const loginRouter = express.Router();

loginRouter.route('/')
  .get(middleware.validation.JWT, controller.user.findAll)
  .post(middleware.validation.user, controller.user.create);

loginRouter.route('/:id')
  .get(middleware.validation.JWT, controller.user.findById);

loginRouter.use(middleware.error);

module.exports = loginRouter;
