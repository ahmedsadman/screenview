const Server = require('./server');
const routes = require('./routes');

require('dotenv').config();

module.exports = new Server()
  .router(routes)
  .db(process.env.MONGODB_DATABASE_URI)
  .listen(process.env.PORT || 3001);
