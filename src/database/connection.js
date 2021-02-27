import { Sequelize } from 'sequelize'

import config from '../config/database'

const connection = new Sequelize(config)

try {
  connection.authenticate()
  console.log('conectado!')
} catch (error) {
  console.error('falha: ', error)
}

export default connection
