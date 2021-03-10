const request = require('supertest');
const faker = require('faker');
const App = require('../app');

describe('Test User Routes', () => {
  it('Should return statusCode 201 in route /user/create', async () => {
    await request(App)
      .post('/user/create')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        photo: faker.internet.avatar(),
      })
      .expect(201);
  });
  it('Should return statusCode 200 in route /user/listUsers', async () => {
    await request(App)
      .get('/user/listUsers')
      .expect(200);
  });
});
