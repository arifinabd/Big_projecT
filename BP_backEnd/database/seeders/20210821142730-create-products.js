const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        id: uuid.v4(),
        name: 'kemeja',
        image: 'kemeja.jpg',
        stock: 5,
        real_stock: 5,
        price: 100000,
        description: 'good quality'
      },
      {
        id: uuid.v4(),
        name: 'kaos',
        image: 'kaos.jpg',
        stock: 5,
        real_stock: 5,
        price: 100000,
        description: 'good quality'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null)  
  }
};
