const { Sequelize } = require('sequelize');

const config = require('../config/database');

const connection = new Sequelize(config);

try {
  connection.authenticate();
} catch (error) {
  console.error('falha: ', error);
}

module.exports = connection;
