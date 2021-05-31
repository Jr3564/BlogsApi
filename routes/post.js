const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const postRouter = express.Router();

postRouter.route('/')
  .get(middleware.validation.JWT, controller.post.findAll)
  .post(middleware.validation.JWT, middleware.validation.post, controller.post.create);

postRouter.route('/:id')
  .get(middleware.validation.JWT, controller.post.findById);

postRouter.use(middleware.error.badRequest);

module.exports = postRouter;
