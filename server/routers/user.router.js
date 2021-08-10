const express = require('express');
const controller = require('../controllers/user.controller');
const wrap = require('../utils/wrap');

module.exports = express
  .Router()
  .post('/', wrap(controller.create))
  .put('/', wrap(controller.updateByGuid))
  .get('/:id/posts', wrap(controller.getUserPosts))
  .post('/:fromId/follow/:toId', wrap(controller.followUser))
  .get('/:id/followee', wrap(controller.getFollowees))
  .get('/:id/feed', wrap(controller.getUserFeed))
  .post('/:id/watchlist', wrap(controller.addToWatchList))
  .delete('/:id/watchlist', wrap(controller.removeFromWatchList));
