require('dotenv').config()

import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
import morgan = require('morgan')
import { defaultErrorHandler } from 'aevm'
import config = require('config')

const router = require('./api/router')

const app = express()
const port = config.get('app.port')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router)

app.use((err, req, res, next) => {
  if (err.name === 'TokenExpiredError') {
    return next({ httpCode: 400, message: 'Token expired' })
  }

  if (err.name === 'JsonWebTokenError') {
    return next({ httpCode: 400, message: 'Wrong token signature' })
  }

  next(err)
})

app.use(defaultErrorHandler)

app.listen(port, () => console.log(`Listen on port: ${port}`))
