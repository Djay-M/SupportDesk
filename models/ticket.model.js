'use strict';

module.exports = (sequelize, DataTypes) => {
const Ticket = sequelize.define("Ticket", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    ticketNo: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priorityTag: {
        type: DataTypes.ENUM(['HIGH', 'MEDIUM', 'LOW']),
        defaultValue: 'LOW'
    },
    assignedTo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    inDepartment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    closed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      createdby: {
        type: DataTypes.STRING,
      },
      archived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    archivedBy: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'Ticket',
    freezeTableName: true,
});
Ticket.associate = function(models) {
    Ticket.belongsTo(models.User, {foreignKey: 'assignedTo'})
    Ticket.belongsTo(models.User, {foreignKey: 'createdby'})
    Ticket.belongsTo(models.User, {foreignKey: 'archivedBy'})
    Ticket.belongsTo(models.Department, { foreignKey: 'inDepartment' })
    Ticket.hasMany(models.Comment, { foreignKey: 'ticketID' })
  };
  return Ticket;
}