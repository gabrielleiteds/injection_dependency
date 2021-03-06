const AuthService = require('../../domain/services/authService');

module.exports = {
  async authenticate(req, res) {
    const { email, password } = req.body;

    const token = await AuthService.authenticate(email, password);

    if (!token) {
      return res.status(500).json();
    }

    return res.status(200).cookie('authorization', token).json({ token });
  },

  logoutUser(req, res) {
    res.clearCookie('auth');
    res.clearCookie('user');
  },
};
