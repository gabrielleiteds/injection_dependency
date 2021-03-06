const UserRepository = require('./UserRepository')
const generateToken = require('../../infrastructure/utils/generateToken');

class AuthRepository {
  #UserRepository
  constructor() {
    this.#UserRepository = new UserRepository()
  }
  
  async authenticate(email, password) {
    const user = await this.#UserRepository.getUser(email)

    user.password = undefined;

    const token = generateToken({ id: user.id });

    return token;
  }
}

module.exports = AuthRepository;
