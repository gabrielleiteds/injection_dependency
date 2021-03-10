/* eslint-disable class-methods-use-this */
const jwt = require('jsonwebtoken');
const AccessTokenManager = require('../../application/security/AccessTokenManager');

module.exports = class extends AccessTokenManager {
  generate(params = {}) {
    return jwt.sign(params, process.env.SECRET, {
      expiresIn: '1d',
    });
  }
};
