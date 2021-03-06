const UserModel = require('../models/User');

class UserRepository {
  #model
  constructor() {
    this.#model = UserModel;
  }

  async create(user) {
    return this.#model.create(user);
  }

  async getUser(email) {
    const checkUser = await this.#model.findOne({
      where: {
        email,
      },
    });

    return checkUser;
  }

  async update(fields) {
    return this.#model.update(fields, {
      where: {
        id: fields.id,
      },
    });
  }

  async delete(userId) {
    return this.#model.destroy({
      where: {
        id: userId,
      },
    });
  }
}

module.exports = UserRepository;
