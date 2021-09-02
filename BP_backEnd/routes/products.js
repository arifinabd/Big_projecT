const { Router } = require('express')
const router = Router()

const { create, findAll } = require('../controllers/products')
const authorization = require('../middleware/authorization')
const authorization_admin = require('../middleware/authorization_admin')

router.post('/', authorization_admin, create)
router.get('/', authorization, findAll)

module.exports = router