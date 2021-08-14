const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },
  receiver: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  isRead: {
    type: Boolean,
    default: false
  },
  eventName: {
    type: String,
    required: true
  },
  textContent: {
    type: String,
    required: false
  },
  post: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Post'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Notification', notificationSchema);
