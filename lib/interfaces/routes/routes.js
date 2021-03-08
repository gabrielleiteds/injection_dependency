const { Router } = require('express');

const userRoutes = require('./users');
const authRoutes = require('./authentication');

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ statusCode: '200' });
});
routes.use('/user', userRoutes);
routes.use(authRoutes);

module.exports = routes;
