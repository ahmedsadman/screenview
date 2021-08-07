const express = require('express');
const controller = require('../controllers/user.controller');
const wrap = require('../utils/wrap');

module.exports = express
  .Router()
  .get('/', wrap(controller.test));