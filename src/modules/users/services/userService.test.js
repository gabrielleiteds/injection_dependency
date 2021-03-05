const UserService = require('./userService');

describe('User Test', () => {
  it('Should return user Created', async () => {
    const user = {
      name: 'User_01',
      email: 'user_01@gmail.com',
      password: '123',
      photo: 'link.com.br',
    };
    const createdUser = await UserService.createUser(user);

    expect(createdUser).not.toBeNull();
  });
  it('Should return Error because user already exists', async () => {
    const user = {
      name: 'User_01',
      email: 'user_01@gmail.com',
      password: '123',
      photo: 'link.com.br',
    };
    const createdUser = await UserService.createUser(user);

    const createdUserAlreadyExist = await UserService.createUser(user);

    expect(createdUserAlreadyExist).not.toEqual(user);
  });
});
