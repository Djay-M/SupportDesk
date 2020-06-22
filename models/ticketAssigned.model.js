module.exports = (sequelize, DataTypes) => {
const TicketAssigned = sequelize.define('TicketAssigned', {
    id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    },
    user: {
    type: DataTypes.UUID,
    allowNull: false,
    },
    ticket: {
    type: DataTypes.UUID,
    allowNull: false,
    },
    createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    },
    updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    },
}, {
    tableName: 'TicketAssigned',
    freezeTableName: true,
});
TicketAssigned.associate = (models) => {
    TicketAssigned.belongsTo(models.User, { foreignKey: 'user' });
    TicketAssigned.belongsTo(models.Ticket, { foreignKey: 'ticket' });
};
return TicketAssigned;
};
