const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const userRouter = express.Router();

userRouter.route('/')
  .get(middleware.validation.JWT, controller.user.findAll)
  .post(middleware.validation.user, controller.user.create);

userRouter.route('/:id')
  .get(middleware.validation.JWT, controller.user.findById);

userRouter.use(middleware.error.badRequest);

module.exports = userRouter;
