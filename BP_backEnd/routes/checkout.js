const { Router } = require('express')
const router = Router()

const { addToCheckout, getCheckout } = require('../controllers/checkout')
const authorization = require('../middleware/authorization')

router.post('/', authorization, addToCheckout)
router.get('/:id', authorization, getCheckout)


module.exports = router