const GetAccessToken = require('../../application/use_cases/authentication/GetAccessToken');

const AccessTokenManager = require('../../infrastructure/security/JwtAccessToken');
const UserRepository = require('../../infrastructure/repositories/UserRepository');

const accessTokenManager = new AccessTokenManager();
const userRepository = new UserRepository();

module.exports = {
  async authenticate(req, res) {
    const { email, password } = req.body;

    if (!password || !email) {
      return res.status(411).json({
        statusCode: 411,
        message: 'Email ou password Precisam ser preenchidos',
      });
    }

    try {
      const token = await GetAccessToken(email, password, {
        userRepository,
        accessTokenManager,
      });

      // Output
      return res.status(200).cookie('authorization', token).json({ token });
    } catch (err) {
      return res.status(400).json({
        statusCode: '400',
        message: 'Bad Credentials',
      });
    }
  },

  logoutUser(req, res) {
    return Promise.all([res.clearCookie('auth'), res.clearCookie('user')]);
  },
};
