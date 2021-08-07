const express = require('express');
const controller = require('../controllers/post.controller');
const wrap = require('../utils/wrap');

module.exports = express
  .Router()
  .post('/:authorId', wrap(controller.create));
