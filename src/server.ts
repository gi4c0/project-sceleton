import config from 'config'
import * as express from 'express'

import start from './index'

const port = config.get('port')

start()
  .then((app: express.Application): void => {
    app.listen(port, () => console.log(`Listen on port ${port}`))
  })
