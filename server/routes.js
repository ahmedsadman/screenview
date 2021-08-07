const userRouter = require('./routers/user.router');
const postRouter = require('./routers/post.router');

module.exports = function routes(app) {
  app.use('/users', userRouter);
  app.use('/posts', postRouter);
}
