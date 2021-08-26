const { Model, DataTypes } = require('sequelize')      
const connection = require('../connection')

class Cart extends Model {}

Cart.init({
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
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  modelName: 'Carts',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Cart