const Server = require('./server');
const routes = require('./routes');

module.exports = new Server()
  .router(routes)
  .listen(3001);
