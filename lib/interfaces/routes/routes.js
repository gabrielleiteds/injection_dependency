const { Router } = require('express');

const userRoutes = require('../controllers/users');
const authRoutes = require('../controllers/authentication');

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ statusCode: '200' });
});
routes.use('/user', userRoutes);
routes.use(authRoutes);

module.exports = routes;
