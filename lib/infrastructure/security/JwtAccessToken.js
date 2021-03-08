/* eslint-disable class-methods-use-this */
const jwt = require('jsonwebtoken');
const AccessTokenManager = require('../../application/security/AccessTokenManager');

module.exports = class extends AccessTokenManager {
  generate(payload) {
    return jwt.sign(payload, process.env.SECRET, {
      expiresIn: '1d',
    });
  }

  decode(accessToken) {
    return jwt.verify(accessToken, process.env.SECRET);
  }
};
