const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const sequelize = require('../database/connection');

const ROUNDS = 10;

const User = sequelize.define('UserModel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
  },
}, {
  hooks: {
    afterValidate: async (user) => {
      // generate uuid v4:
      user.id = uuid.v4();

      // encrypt the password:
      if (user.password) {
        user.password = await bcrypt.hash(user.password, ROUNDS);
      }
    },
  },
  sequelize,
  tableName: 'users',
  underscored: true,
});

User.prototype.comparePassword = (password) => {
  bcrypt.compare(password, this.password);
};

module.exports = User;
