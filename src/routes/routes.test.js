const App = require('../app')
const request = require('supertest')

describe('Routes test', () => {
  it('Should return statusCode 200 in route /', (done) => {
    request(App).get('/').expect(200, done)
  })
})
