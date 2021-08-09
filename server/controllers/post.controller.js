const postService = require('../services/post.service');

class PostController {
  async create(req, res) {
    const { type, content, authorId } = req.body;
    const post = await postService.create(type, content, authorId);
    res.status(201).json(post);
  }

  async addComment(req, res) {
    const { postId } = req.params;
    const { authorId, content } = req.body;
    const comment = await postService.addComment(postId, authorId, content);
    res.status(201).json(comment);
  }
}

module.exports = new PostController();