const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { defaultErrorHandler } = require('aevm')

const router = require('./api/router.js')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api', router)

app.use(defaultErrorHandler)

module.exports = app
