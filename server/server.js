const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');

const app = express();

class Server {
  constructor() {
    app.use(express.json());
    app.use(cors());
  }

  db(url) {
    const options = {
      useNewUrlParser:true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
    mongoose.connect(url, options).catch(err => console.log('Error connecting to db', err));
    return this;
  }

  router(routes) {
    routes(app);
    app.use(errorHandler);
    return this;
  }

  listen(port) {
    app.listen(port, () => console.log('Server started at port', port));
  }
}

module.exports = Server;
