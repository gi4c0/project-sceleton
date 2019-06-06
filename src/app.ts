require('dotenv').config()

import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
import morgan = require('morgan')
import config = require('config')

import { router } from './api/router'

const port = config.get('app.port')
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Wrong endpoint' })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.httpCode || 500).json({ message: err.userMessage || err.message })
})

app.listen(port, () => console.log(`Listen on port: ${port}`))
