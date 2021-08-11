const userService = require('../services/user.service');

class UserController {
  async create(req, res) {
    const { guid } = req.body;
    const user = await userService.create(guid);
    res.status(201).json(user);
  }

  async getByGuid(req, res) {
    const { guid } = req.params;
    const user = await userService.getByGuid(guid);
    res.json(user);
  }

  async updateByGuid(req, res) {
    const { guid } = req.query;
    const user = await userService.updateByGuid(guid, req.body);
    res.json(user);
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

  async addToWatchList(req, res) {
    const { id } = req.params;
    const { title, type, mediaId } = req.body;
    const list = await userService.addToWatchList(id, title, type, mediaId);
    res.json(list);
  }

  async removeFromWatchList(req, res) {
    const { id } = req.params;
    const { mediaId } = req.body;
    const list = await userService.removeFromWatchList(id, mediaId);
    res.json(list);
  }
}

module.exports = new UserController();
