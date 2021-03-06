const UserService = require('../../domain/services/userService');

module.exports = {
  async create(req, res) {
    const {
      name,
      email,
      password,
      photo,
    } = req.body;

    const user = await UserService.createUser(name, email, password, photo);

    user.password = undefined;

    return res.status(201).json(user);
  },
};