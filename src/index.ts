import express from 'express'

import startup from './startup'

const app = express()

export default startup(app)
