const mongoose = require('mongoose')
const Promise = require('bluebird')
const config = require('config')

module.exports = () => {
  mongoose.connect(config.get('db'), { useMongoClient: true })
}
