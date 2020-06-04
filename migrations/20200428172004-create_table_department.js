'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Department", {
      id: {
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.STRING(300),
          allowNull: true,
      },
      createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW')
        },
        createdby: {
          type: Sequelize.STRING,
        },
        archived: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
      },
      archivedBy: {
          type: Sequelize.STRING,
          allowNull: true,
      },
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Department');
  }
};
