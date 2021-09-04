const { Checkout, Product, User, Payment, Cart, sequelize } = require('../database/models');

exports.Checkout = async (req, res, next) => {
  const transaction = await sequelize.transaction()
  try {
    const getCartByUser = await Cart.findAll({
      include: [
        {
          model: Product,
          as: 'Products',
          required: false
        },
      ],
      where: { user_id: req.params.userId }
    });

    const totalPrice = getCartByUser.reduce((acc, val) => {
      return acc + (val.quantity * val.Products.price_disc)
    }, 0)

    const payment = await Payment.create(
      {
        total_price: totalPrice,
      },
      { transaction }
    )

    const checkoutTemp = []
    getCartByUser.forEach((val) => {
      checkoutTemp.push({
        payment_id: payment.id,
        user_id: req.params.userId,
        product_id: val.product_id
      })
    })

    await Checkout.bulkCreate(checkoutTemp, { transaction })

    await Cart.destroy({where: {user_id: req.params.userId}})

    await transaction.commit()

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Success checkout."
    });
  } catch (error) {
    await transaction.rollback()
    return next(error)
  }
};





























































// exports.addToCheckout = async (req, res, next) => {
//   try {
//     await Checkout.create(req.body);

//     return res.status(201).json({
//       status: "Success",
//       code: 201,
//       message: "Success add to checkout"
//     });
//   } catch (error) {
//     return next(error)
//   }
// };

// exports.getCheckout = async (req, res, next) => {
//   try {
//     const data = await Checkout.findAll({
//       include: [
//         {
//           model: Product,
//           as: 'Products',
//           required: false
//         },
//         {
//           model: User,
//           as: 'Users',
//           required: false,
//           attributes: ['name', 'username']
//         },
//         {
//           model: Payment,
//           as: 'Payments',
//           required: false
//         }
//       ], 
//       where: {
//         user_id: req.params.id
//       }
//     });
    
//     return res.status(201).json({
//       status: "Success",
//       code: 201,
//       data: data,
//     });
//   } catch (error) {
//     return next(error)
//   }
// };

// exports.Checkout = async (req, res, next) => {
//   try {
//     Cart.destroy({
//       where: { id: [1,2,3,4] }
//     })

//     return res.status(201).json({
//       status: "Success",
//       code: 201,
//       message: 'Checkout succsess'
//     })
//   } catch (error) {
//     return next(error)
//   }
// };