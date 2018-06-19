import Bluebird from 'bluebird'
import * as express from 'express'

import * as middleware from './middleware'
import database from './database'

export default async (app: express.Application): Promise<express.Application> => {
  await Bluebird.each([
    database,
    middleware
  ], (func: any) => func(app))

  return app
}
