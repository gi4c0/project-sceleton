module.exports = {
  db: {
    mysql: {
      host: process.env.UAT_HOST,
      user: process.env.UAT_USER,
      password: process.env.UAT_PASS,
      port: process.env.UAT_PORT
    }
  }
}
