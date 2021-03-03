const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const { DataTypes, Model } = require('sequelize');

const sequelize = require('../database/connection');

class User extends Model {}

User.init({
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
    allowNull: false,
  },
}, {
  hooks: {
    afterValidate: async (user) => {
      user.id = uuid.v4();
      user.password = await bcrypt.hash(user.password, 10);
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
