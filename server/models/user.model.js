const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['movie', 'tv'],
    required: true
  },
  mediaId: {
    type: String,
    required: true
  }
});

const userSchema = new Schema({
  email: {
    type: String,
    required: false,
    unique: true
  },
  guid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: false
  },
  avatarUrl: {
    type: String,
    required: false
  },
  watchList: {
    type: [watchListSchema],
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
