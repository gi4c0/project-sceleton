import morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as express from 'express'

import router from '../routes/indexRoute'

export default (app: express.Application): void => {
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(router)
}
