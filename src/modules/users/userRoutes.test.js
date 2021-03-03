const request = require('supertest');
const App = require('../../app');

describe('Routes test', () => {
  it('Should return statusCode 200 in route /user/profile', (done) => {
    request(App).get('/user/profile').expect(200, done);
  });
});
