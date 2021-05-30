const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const productsRouter = express.Router();

productsRouter.route('/')
  .post(middleware.validation.user, controller.user.create);

productsRouter.use(middleware.error);

module.exports = productsRouter;
