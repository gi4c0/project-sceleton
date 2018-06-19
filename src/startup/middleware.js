const morgan = require('morgan')
const bodyParser = require('body-parser')

const router = require('../routes/indexRoute.js')

module.exports = app => {
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(router)
}
