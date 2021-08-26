const { Model, DataTypes } = require('sequelize')      
const connection = require('../connection')

class Checkout extends Model {}

Checkout.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  product_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  payment_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  }  
}, {
  modelName: 'Checkouts',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Checkout