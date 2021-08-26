const { Router } = require('express')
const router = Router()

const { create, findAll } = require('../controllers/products')
const authorization = require('../middleware/authorization')

router.post('/', authorization, create)
router.get('/', authorization, findAll)

module.exports = router