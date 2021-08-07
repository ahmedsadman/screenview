class UserController {
  async test(req, res) {
    res.json({ status: 'OK' });
  }
}

module.exports = new UserController();