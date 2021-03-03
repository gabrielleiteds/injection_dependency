const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ statusCode: '200' })
})

module.exports = routes
