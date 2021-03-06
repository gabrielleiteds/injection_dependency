const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

class App {
  constructor(Express = express()) {
    this.Express = Express;

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
