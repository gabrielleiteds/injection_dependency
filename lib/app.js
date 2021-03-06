const bodyParser = require('body-parser')
const express = require('express')

const routes = require('./routes')

class App {
  #Express
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
    require('./database/connection')
  }
}

module.exports = new App().Express
