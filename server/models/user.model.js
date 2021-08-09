const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  avatar_url: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
