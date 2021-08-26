const { Cart, Product, User } = require('../database/models');

exports.addToCart = async (req, res, next) => {
  try {
    await Cart.create(req.body);

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Success add to cart"
    });
  } catch (error) {
    return next(error)
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const data = await Cart.findAll({
      include: [
        {
          model: Product,
          as: 'Products',
          required: false
        },
        {
          model: User,
          as: 'Users',
          required: false,
          attributes: ['name', 'username']
        }
      ], 
      where: {
        user_id: req.params.id
      }
    });
    
    return res.status(201).json({
      status: "Success",
      code: 201,
      data: data,
    });
  } catch (error) {
    return next(error)
  }
};

exports.updateQty = async (req, res, next) => {
  try {
    const { product_id, quantity } = req.body
    Cart.update({
      product_id, quantity
    }, {
      where: {user_id: req.params.id}
    })

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: 'cart updated'
    })
  } catch (error) {
    return next(error)
  }
};

exports.delCart = async (req, res, next) => {
  try {
    const { product_id } = req.body
    Cart.destroy({
      product_id,
    }, {
      where: {user_id: req.params.id}
    })

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: 'Delete product'
    })
  } catch (error) {
    return next(error)
  }
};