import { Router } from 'express'

const router = Router()

router.use('/users', require('../api/user/user.router'))

module.exports = router
