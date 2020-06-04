'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserRoleMapping", {
      id: {
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
      },
      user: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'User',
            key: 'id'
          },
      },
      role: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'Role',
            key: 'id'
          },
      },
  })
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserRoleMapping')
  }
};
