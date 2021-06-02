const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const postRouter = express.Router();

postRouter.route('/')
  .get(middleware.validation.JWT, controller.post.findAll)
  .post(middleware.validation.JWT, middleware.validation.post, controller.post.create);

postRouter.route('/search')
  .get(middleware.validation.JWT, controller.post.search);

postRouter.route('/:id')
  .get(middleware.validation.JWT, controller.post.findById)
  .delete(middleware.validation.JWT, middleware.validation.userAuth, controller.post.exclude)
  .put(
    middleware.validation.JWT,
    middleware.validation.userAuth,
    middleware.validation.updatePost,
    controller.post.update,
  );

postRouter.use(middleware.error.badRequest);

module.exports = postRouter;
