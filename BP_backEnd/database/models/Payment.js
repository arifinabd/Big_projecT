const { Model, DataTypes } = require('sequelize')      
const connection = require('../connection')

class Payment extends Model {}

Payment.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  total_price: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  modelName: 'Payments',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Payment