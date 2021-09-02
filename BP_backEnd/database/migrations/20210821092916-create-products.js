module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Products',
      {
        id: {
          type: Sequelize.UUID,
          default: Sequelize.UUIDV4,
          primaryKey: true
        },
        type: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        caption: {
          type: Sequelize.STRING,
          allowNull: false
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false
        },
        stock: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        real_stock: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        price: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        price_disc: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products')
  }
};
