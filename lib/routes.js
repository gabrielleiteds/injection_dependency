const { Router } = require('express');

const userRoutes = require('./application/users');

const routes = Router();

routes.use('/user', userRoutes);

routes.get('/', (req, res) => {
  res.json({ statusCode: '200' });
});

module.exports = routes;
