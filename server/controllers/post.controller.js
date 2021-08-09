const postService = require('../services/post.service');

class PostController {
  async create(req, res) {
    const { type, content } = req.body;
    const { authorId } = req.params;
    const post = await postService.create(type, content, authorId);
    res.status(201).json(post);
  }
}

module.exports = new PostController();