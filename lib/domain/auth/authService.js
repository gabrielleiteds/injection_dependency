const AuthRepository = require('../../infrastructure/repositories/AuthRepository');

class AuthService extends AuthRepository {
  async authentication(email, password, { UserRepository }) {
    const user = await UserRepository.getUser(email);

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

    const token = await this.authenticate(email, password);

    return token;
  }
}

module.exports = new AuthService();
