const User = require('../models/user.model');
const Post = require('../models/post.model');

class UserService {
  async create(name, email) {
    const user = new User({ name, email });
    await user.save();
    return user;
  }

  async getUserPosts(userId) {
    const posts = await Post.find({ author: userId }).lean().exec();
    return posts;
  }
}

module.exports = new UserService();
