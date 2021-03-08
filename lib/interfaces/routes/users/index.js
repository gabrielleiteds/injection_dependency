const { Router } = require('express');
const UserController = require('../../controllers/UserController');

const routes = Router();

routes.post('/create', UserController.createUser);
routes.get('/listUsers', UserController.listUsers);
routes.get('/getUser/:email', UserController.getUser);
routes.delete('/delete/:id', UserController.deleteUser);

module.exports = routes;
