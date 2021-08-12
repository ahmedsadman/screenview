const postService = require('../services/post.service');

class PostController {
  async create(req, res) {
    const post = await postService.create(req.body);
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