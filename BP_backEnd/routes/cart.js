const { Router } = require('express')
const router = Router()

const { addToCart, getCart, updateQty, delCart } = require('../controllers/cart')
const authorization = require('../middleware/authorization')

router.post('/', authorization, addToCart)
router.get('/:id', authorization, getCart)
router.patch('/update/:id', authorization, updateQty)
router.delete('/:id', authorization, delCart )


module.exports = router