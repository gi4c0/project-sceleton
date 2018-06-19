import * as mongoose from 'mongoose'
import * as config from 'config'

export default () => {
  mongoose.connect(config.get('db'), { useMongoClient: true })
}
