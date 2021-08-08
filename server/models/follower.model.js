const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followerSchema = new Schema({
  from: { // follower
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: { // followee
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Follower', followerSchema);
