const postService = require('../services/post.service');

class PostController {
  async create(req, res) {
    const { type, content, authorId } = req.body;
    const post = await postService.create(type, content, authorId);
    res.status(201).json(post);
  }
}

module.exports = new PostController();