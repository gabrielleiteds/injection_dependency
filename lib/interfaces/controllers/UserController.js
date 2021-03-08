const CreateUser = require('../../application/use_cases/users/CreateUser');
const GetUser = require('../../application/use_cases/users/GetUser');
const ListUsers = require('../../application/use_cases/users/ListUsers');
const DeleteUser = require('../../application/use_cases/users/DeleteUser');

const UserRepository = require('../../infrastructure/repositories/UserRepository');

const userRepository = new UserRepository();

module.exports = {
  async createUser(req, res) {
    const {
      name,
      email,
      password,
      photo,
    } = req.body;

    const user = await CreateUser(name, email, password, photo, { userRepository });

    return res.status(201).json(user);
  },
  async listUsers(req, res) {
    const { email } = req.body;

    const users = await ListUsers({ userRepository });

    return res.status(200).json(users);
  },

  async getUser(req, res) {
    const { email } = req.params;

    const users = await GetUser(email, { userRepository });

    return res.status(200).json(users);
  },

  async deleteUser(req, res) {
    const { userId } = req.params.id;

    await DeleteUser(userId, { userRepository });

    res.status(200).json({
      Message: 'Usuario deletado',
    });
  },
};
