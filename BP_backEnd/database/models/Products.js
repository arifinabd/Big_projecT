const { Model, DataTypes } = require('sequelize')      
const connection = require('../connection')

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  real_stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  price_disc: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  }
}, {
  modelName: 'Products',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Product