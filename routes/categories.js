const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const categorieRouter = express.Router();

categorieRouter.route('/')
  .get(middleware.validation.JWT, controller.categories.findAll)
  .post(middleware.validation.JWT, controller.categories.create);

categorieRouter.use(middleware.error.badRequest);

module.exports = categorieRouter;
