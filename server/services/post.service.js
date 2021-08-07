const Post = require('../models/post.model');

class PostService {
  async create(type, content, author) {
    const post = new Post({ type, content, author });
    return await post.save();
  }
}

module.exports = new PostService();
