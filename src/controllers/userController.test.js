const UserController = require('./userController');

const userController = new UserController();

describe('User Test', () => {
  it('Should return user Created', async () => {
    const user = {
      name: 'User_01',
      email: 'user_01@gmail.com',
      password: '123',
      photo: 'link.com.br',
    };
    const createdUser = await userController.create(user);

    console.log(createdUser);

    expect.anything();
  });
});
