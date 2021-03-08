const User = require('../models/User');
const UserRepository = require('../../domain/UserRepository');

module.exports = class extends UserRepository {
  constructor() {
    super();
    this.model = User;
  }

  async create(user) {
    const {
      name,
      email,
      password,
      photo,
    } = user;

    const createUser = await this.model.create({
      name,
      email,
      password,
      photo,
    });

    return createUser;
  }

  async update(userEntity) {
    const user = await this.model.findByPk(userEntity.id);

    if (!user) return false;

    const {
      name, email, password, photo,
    } = userEntity;

    return user.update({
      name, email, password, photo,
    });
  }

  async find() {
    const users = await this.model.findAll();

    return users;
  }

  async remove(userId) {
    const user = await this.model.findByPk(userId);

    if (user) {
      return user.destroy();
    }

    return false;
  }

  async getByEmail(userEmail) {
    const user = await this.model.findOne({
      where: {
        email: userEmail,
      },
    });

    return user;
  }
};
