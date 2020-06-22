'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Ticket', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    ticketNo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    priorityTag: {
      type: Sequelize.ENUM(['HIGH', 'MEDIUM', 'LOW']),
      defaultValue: 'LOW',
    },
    assignedTo: {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'TicketAssigned',
        key: 'id',
      },
    },
    inDepartment: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Department',
        key: 'id',
      },
    },
    closed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    },
    createdby: {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    archived: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    archivedBy: {
      type: Sequelize.UUID,
      allowNull: true,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Ticket'),
};
