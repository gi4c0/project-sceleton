const config = require('config')
const start = require('./src')

const port = config.get('port')

start()
  .then(app => {
    app.listen(port, console.log(`Server is listening on port ${port}`))
  })
