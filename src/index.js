const express = require('express')
const startup = require('./startup/index')

const app = express()

module.exports = startup(app)
