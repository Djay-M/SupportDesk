'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Comment", {
      id: {
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
      },
      content: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      ticketID:{
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'Ticket',
            key: 'id'
          },   
      },
      createdby: {
          type: Sequelize.STRING,
          allowNull:false,
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
        archived: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
      },
  });
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('comment')
  }
};
