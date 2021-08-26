module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Payments',
      {
        id: {
          type: Sequelize.UUID,
          default: Sequelize.UUIDV4,
          primaryKey: true
        },
        total_price: {
          type: Sequelize.BIGINT,
          allowNull: false
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payments')
  }
};
