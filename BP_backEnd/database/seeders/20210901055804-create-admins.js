const uuid = require('uuid')
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = '12345678'
    return queryInterface.bulkInsert('Admins', [
      {
        id: uuid.v4(),
        name: 'adam',
        username: 'adam',
        password: bcrypt.hashSync(password, 12)
      },
      {
        id: uuid.v4(),
        name: 'mike',
        username: 'mike',
        password: bcrypt.hashSync(password, 12)
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null)  
  }
};
