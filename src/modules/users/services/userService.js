const UserRepository = require('../../../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name, email, password, photo) {
    const userAlreadyExists = await this.userRepository.getUser(email);

    if (userAlreadyExists) {
      return new Error({
        status: 400,
        message: 'User Already Exists',
      });
    }

    const user = await this.userRepository.create({
      name,
      email,
      password,
      photo,
    });

    return user;
  }
}

module.exports = new UserService();
