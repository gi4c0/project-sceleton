require('dotenv').config()

import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
import morgan = require('morgan')
import config = require('config')

import { router } from './api/router'
import { APIError } from './utils/APIError'

const port = config.get('app.port')
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', router)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Wrong endpoint' })
})

app.use((err: APIError, req, res, next) => {
  console.error(err)
  res.status(err.httpCode).json({ status: 'system error', message: err.userMessage })
})

app.listen(port, () => console.log(`Listen on port: ${port}`))
