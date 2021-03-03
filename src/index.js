const App = require('./app')

require('dotenv').config()

App.listen(3333, () => {
  console.log('Server run on port 3333')
})
