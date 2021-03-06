const UserRepository = require('../../infrastructure/repositories/UserRepository');

class UserService extends UserRepository {
  async createUser(user) {
    const {
      name,
      email,
      password,
      photo,
    } = user;

    const userAlreadyExists = await this.getUser(email);

    if (userAlreadyExists) {
      return new Error({
        status: 400,
        message: 'User Already Exists',
      });
    }

    const createdUser = await this.create({
      name,
      email,
      password,
      photo,
    });

    return createdUser;
  }
}

module.exports = new UserService();
