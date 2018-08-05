import Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../../config/config.json')[env]

import { userFactory } from './user'

const sequelize = new Sequelize(config.database, config.username, config.password, config)

export const db = {
  sequelize,
  Sequelize,
  User: userFactory(sequelize)
}
