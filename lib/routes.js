const { Router } = require('express');

const userRoutes = require('./application/users');
const authRoutes = require('./application/authentication/index');

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ statusCode: '200' });
});
routes.use('/user', userRoutes);
routes.use(authRoutes);

module.exports = routes;
