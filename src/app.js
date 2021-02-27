import bodyParser from 'body-parser'
import express from 'express'
import routes from './routes/routes'
class App {
  constructor (Express = express()) {
    this.Express = Express

    this.middlewares()
    this.routes()
    this.database()
  }

  async middlewares () {
    this.Express.use(bodyParser.urlencoded({
      extended: true
    }))
    this.Express.use(bodyParser.json())
  }

  async routes () {
    this.Express.use(routes)
  }

  async database () {
    import('./database/connection')
  }
}

export default new App().Express
