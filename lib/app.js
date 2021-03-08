const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./interfaces/routes/routes');

class App {
  constructor() {
    this.Express = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  async middlewares() {
    this.Express.use(bodyParser.urlencoded({
      extended: true,
    }));
    this.Express.use(bodyParser.json());
    this.Express.use(cookieParser());
  }

  async routes() {
    this.Express.use(routes);
  }

  async database() {
    require('./infrastructure/database/connection');
  }
}

module.exports = new App().Express;
