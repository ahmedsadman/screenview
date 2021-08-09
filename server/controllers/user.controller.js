const userService = require('../services/user.service');

class UserController {
  async create(req, res) {
    const { guid } = req.body;
    const user = await userService.create(guid);
    res.status(201).json(user);
  }

  async getUserPosts(req, res) {
    const { id } = req.params;
    const posts = await userService.getUserPosts(id);
    res.json({
      total: posts.length,
      posts
    });
  }

  async followUser(req, res) {
    const { fromId, toId } = req.params;
    const follower = await userService.followUser(fromId, toId);
    res.status(201).json(follower);
  }

  async getFollowees(req, res) {
    const { id } = req.params;
    const followees = await userService.getFollowees(id);
    res.json({
      total: followees.length,
      followees
    });
  }

  async getUserFeed(req, res) {
    const { id } = req.params;
    const posts = await userService.getUserFeed(id);
    res.json({
      total: posts.length,
      posts
    });
  }
}

module.exports = new UserController();
