const express = require('express');
const controller = require('../controllers/notification.controller');
const wrap = require('../utils/wrap');
const checkJwt = require('../middleware/checkJwt');

module.exports = express
  .Router()
  .get('/users/me', checkJwt, wrap(controller.getUserNotifications))
  .post('/users/me/read', checkJwt, wrap(controller.markAsRead));
