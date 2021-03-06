const express = require('express');
const controller = require('../controllers/user.controller');
const wrap = require('../utils/wrap');
const checkJwt = require('../middleware/checkJwt');

module.exports = express
  .Router()
  .get('/search', checkJwt, wrap(controller.searchUser))
  .get('/suggestions', checkJwt, wrap(controller.getFollowSuggestions))
  .post('/me', checkJwt, wrap(controller.create))
  .put('/me', checkJwt, wrap(controller.updateUser))
  .get('/me', checkJwt, wrap(controller.getUser))
  .get('/me/posts', checkJwt, wrap(controller.getUserPosts))
  .post('/me/follow/:toId', checkJwt, wrap(controller.followUser))
  .post('/me/unfollow/:toId', checkJwt, wrap(controller.unfollowUser))
  .get('/me/followee', checkJwt, wrap(controller.getFollowees))
  .get('/me/feed', checkJwt, wrap(controller.getUserFeed))
  .post('/me/watchlist', checkJwt, wrap(controller.addToWatchList))
  .delete('/me/watchlist', checkJwt, wrap(controller.removeFromWatchList))
  .get('/:id', checkJwt, wrap(controller.getUserById));
