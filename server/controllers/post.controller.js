const postService = require('../services/post.service');

class PostController {
  async create(req, res) {
    const { sub } = req.user;
    const post = await postService.create(sub, req.body);
    res.status(201).json(post);
  }

  async addComment(req, res) {
    const { postId } = req.params;
    const { content } = req.body;
    const { sub } = req.user;
    const comment = await postService.addComment(postId, sub, content);
    res.status(201).json(comment);
  }
}

module.exports = new PostController();