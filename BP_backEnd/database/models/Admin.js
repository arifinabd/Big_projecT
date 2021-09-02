const { Model, DataTypes } = require('sequelize')      
const connection = require('../connection')

class Admin extends Model {}

Admin.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  modelName: 'Admin',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Admin