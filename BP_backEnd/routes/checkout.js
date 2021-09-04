const { Router } = require('express')
const router = Router()

const { Checkout } = require('../controllers/checkout')
const authorization = require('../middleware/authorization')

router.post('/:userId', authorization, Checkout)
// router.get('/:id', authorization, getCheckout)
// router.delete('/:id', authorization, Checkout)


module.exports = router