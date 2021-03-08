const { Router } = require('express');

const routes = Router();

routes.get('/profile', (req, res) => {
  res.json({ profile: 'profile' });
});

module.exports = routes;
