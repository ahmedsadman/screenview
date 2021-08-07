const userRouter = require('./routers/user.router');

module.exports = function routes(app) {
  app.use('/user', userRouter);
}