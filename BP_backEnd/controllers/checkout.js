const { Checkout, Product, User, Payment } = require('../database/models');

exports.addToCheckout = async (req, res, next) => {
  try {
    await Checkout.create(req.body);

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Success add to checkout"
    });
  } catch (error) {
    return next(error)
  }
};

exports.getCheckout = async (req, res, next) => {
  try {
    const data = await Checkout.findAll({
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
        },
        {
          model: Payment,
          as: 'Payments',
          required: false
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