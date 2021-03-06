const UserRepository = require('../../infrastructure/repositories/UserRepository');

const generateToken = require('../../infrastructure/utils/generateToken');

class AuthService {
  #userRepository
  constructor() {
    this.#userRepository = new UserRepository();
  }

  async authenticate(email, password) {
    const user = await this.#userRepository.getUser(email)

    if (!user) {
      return new Error({
        status: 400,
        message: 'User not Found',
      });
    }

    if (!user.comparePassword(password)) {
      return new Error({
        status: 401,
        message: 'Invalid Password',
      });
    }

    user.password = undefined;
    
    const token = generateToken({ id: user.id })

    return token; 
  }
}

module.exports = new AuthService();
