const UserRepository = require('../../../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user) {
    const {
      name,
      email,
      password,
      photo,
    } = user;

    const userAlreadyExists = await this.userRepository.getUser(email);

    if (userAlreadyExists) {
      return new Error({
        status: 400,
        message: 'User Already Exists',
      });
    }

    const createdUser = await this.userRepository.create({
      name,
      email,
      password,
      photo,
    });

    return createdUser;
  }
}

module.exports = new UserService();
