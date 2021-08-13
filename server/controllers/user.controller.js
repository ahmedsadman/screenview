const userService = require('../services/user.service');

class UserController {
  async create(req, res) {
    const { sub } = req.user;
    const { email } = req.body;
    const user = await userService.create(sub, email);
    res.status(201).json(user);
  }

  async getUser(req, res) {
    const { sub } = req.user;
    const user = await userService.getByGuid(sub);
    res.json({
      found: !!user,
      user
    });
  }

  async updateUser(req, res) {
    const { sub } = req.user;
    const user = await userService.updateByGuid(sub, req.body);
    res.json(user);
  }

  async getUserPosts(req, res) {
    const { sub } = req.user;
    const posts = await userService.getUserPosts(sub);
    res.json({
      total: posts.length,
      posts
    });
  }

  async followUser(req, res) {
    const { toId } = req.params;
    const { sub } = req.user;
    const follower = await userService.followUser(sub, toId);
    res.status(201).json(follower);
  }

  async getFollowees(req, res) {
    const { sub } = req.user;
    const followees = await userService.getFollowees(sub);
    res.json({
      total: followees.length,
      followees
    });
  }

  async getUserFeed(req, res) {
    const { sub } = req.user;
    const posts = await userService.getUserFeed(sub);
    res.json({
      total: posts.length,
      posts
    });
  }

  async addToWatchList(req, res) {
    const { sub } = req.user;
    const { title, type, mediaId } = req.body;
    const list = await userService.addToWatchList(sub, title, type, mediaId);
    res.json(list);
  }

  async removeFromWatchList(req, res) {
    const { sub } = req.user;
    const { mediaId } = req.query;
    const list = await userService.removeFromWatchList(sub, mediaId);
    res.json(list);
  }
}

module.exports = new UserController();
