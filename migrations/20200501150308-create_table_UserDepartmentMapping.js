'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserDepartmentMapping', {
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
        key: 'id',
      },
    },
    department: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Department',
        key: 'id',
      },
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('UserDepartmentMapping'),
};
