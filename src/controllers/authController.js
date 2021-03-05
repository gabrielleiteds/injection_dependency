const { request, response } = require('express');
const AuthService = require('../modules/users/services/authService');

class AuthController {
  constructor() {
    this.req = request;
    this.res = response;
  }

  async authenticate() {
    const { email, password } = this.req.body;

    const token = await AuthService.authenticate(email, password);

    if (!token) {
      return this.res.status(500).json();
    }

    return this.res.status(200).cookie('authorization', token).json({ token });
  }
}

module.exports = new AuthController();
