const sequelize = require('../connection')
const User = require('./Users')
const Product = require('./Products')
const Payment = require('./Payment')
const Cart = require('./Cart')
const Checkout = require('./Checkout')


// Cart.hasMany(Product, {
//   as: 'products',
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// })

// Cart.hasOne(User, {
//   as: 'users',
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// })

// Checkout.hasOne(User, {
//   as: 'users',
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// })

// Checkout.hasOne(Payment, {
//   as: 'payment',
//   foreignKey: 'payment_id',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// })

// Checkout.hasOne(Product, {
//   as: 'products',
//   foreignKey: 'products_id',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// })


module.exports = {
  sequelize,
  User,
  Product,
  Payment,
  Cart,
  Checkout
}