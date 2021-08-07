const User = require('../models/user.model');

class UserService {
  async create(name, email) {
    const user = new User({ name, email });
    await user.save();
    return user;
  }
}

module.exports = new UserService();
