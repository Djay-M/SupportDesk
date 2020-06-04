'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserDepartmentMapping", {
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
      department: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'Department',
            key: 'id'
          },
      },
  })
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserDepartmentMapping')
  }
};
