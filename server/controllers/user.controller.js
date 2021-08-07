const userService = require('../services/user.service');

class UserController {
  async create(req, res) {
    const { name, email } = req.body;
    console.log(name, email);
    const user = await userService.create(name, email);
    res.status(201).json(user);
  }
}

module.exports = new UserController();
