const { Router } = require('express');
const AuthController = require('../../controllers/AuthController');

const routes = Router();

routes.post('/login', AuthController.authenticate);
routes.post('/logout', AuthController.logoutUser);

module.exports = routes;
