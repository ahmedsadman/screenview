const userService = require('../services/user.service');

class UserController {
  async create(req, res) {
    const { name, email } = req.body;
    console.log(name, email);
    const user = await userService.create(name, email);
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
}

module.exports = new UserController();
