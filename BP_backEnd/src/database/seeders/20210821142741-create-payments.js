const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payment', [
      {
        id: uuid.v4(),
        total_price: 200000
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Payment', null)  
  }
};
