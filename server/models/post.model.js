const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  type: {
    type: String,
    enum: ['watch', 'review', 'poll']
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
