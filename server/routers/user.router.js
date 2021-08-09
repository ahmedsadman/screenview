const express = require('express');
const controller = require('../controllers/user.controller');
const wrap = require('../utils/wrap');

module.exports = express
  .Router()
  .post('/', wrap(controller.create))
  .get('/:id/posts', wrap(controller.getUserPosts))
  .post('/:fromId/follow/:toId', wrap(controller.followUser))
  .get('/:id/followee', wrap(controller.getFollowees))
  .get('/:id/feed', wrap(controller.getUserFeed));
