const express = require('express');
const controller = require('../controllers/post.controller');
const wrap = require('../utils/wrap');
const checkJwt = require('../middleware/checkJwt');

module.exports = express
  .Router()
  .post('/', checkJwt, wrap(controller.create))
  .post('/:postId/comments', checkJwt, wrap(controller.addComment));
