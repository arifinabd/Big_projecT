module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Checkout',
      {
        id: {
          type: Sequelize.UUID,
          default: Sequelize.UUIDV4,
          primaryKey: true
        },
        payment_id: {
          type: Sequelize.UUID,
          references: {
            model: 'Payment',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        user_id: {
          type: Sequelize.UUID,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        product_id: {
          type: Sequelize.UUID,
          references: {
            model: 'Products',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Checkout')
  }
};
