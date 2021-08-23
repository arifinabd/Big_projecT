const { Model, DataTypes } = require('sequelize')      
const connection = require('../database/connection')

class Cart extends Model {}

Cart.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  modelName: 'Cart',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Cart