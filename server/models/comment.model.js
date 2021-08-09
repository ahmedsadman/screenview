const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  post: { // follower
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  author: { // followee
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
