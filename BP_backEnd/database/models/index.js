const sequelize = require('../connection')
const User = require('./Users')
const Product = require('./Products')
const Payment = require('./Payment')
const Cart = require('./Cart')
const Checkout = require('./Checkout')

User.hasMany(Cart, {
  as: 'Carts',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Product.hasMany(Cart, {
  as: 'Carts',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Cart.belongsTo(User, {
  as: 'Users',
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Cart.belongsTo(Product, {
  as: 'Products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

User.hasMany(Checkout, {
  as: 'Checkouts',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Product.hasMany(Checkout, {
  as: 'Checkouts',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Payment.hasMany(Checkout, {
  as: 'Checkouts',
  foreignKey: 'payment_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Checkout.belongsTo(User, {
  as: 'Users',
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Checkout.belongsTo(Product, {
  as: 'Products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Checkout.belongsTo(Payment, {
  as: 'Payments',
  foreignKey: 'payment_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

module.exports = {
  sequelize,
  User,
  Product,
  Payment,
  Cart,
  Checkout
}