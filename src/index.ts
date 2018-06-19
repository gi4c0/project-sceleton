import express from 'express'

import startup from './startup'

const app = express()

export default (): Promise<express.Application> => startup(app)
