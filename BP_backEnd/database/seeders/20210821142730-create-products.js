const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        id: uuid.v4(),
        type: 'polos',
        name: 'kemeja',
        caption: 'kemeja murah meriaahhh',
        image: 'kemeja.jpg',
        stock: 5,
        real_stock: 5,
        price: 100000,
        price_disc: 75000,
        description: 'good quality'
      },
      {
        id: uuid.v4(),
        type: 'polos',
        name: 'kaos',
        caption: 'kaos murah meriahhh',
        image: 'kaos.jpg',
        stock: 5,
        real_stock: 5,
        price: 100000,
        price_disc: 50000,
        description: 'good quality'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null)  
  }
};
