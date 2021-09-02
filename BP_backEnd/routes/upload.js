const { Router } = require('express')
const router = Router()

const { upload } = require('../controllers/upload')
const authorizationAdmin = require('../middleware/authorization_admin')

router.post('/', authorizationAdmin, upload)

module.exports = router