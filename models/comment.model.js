'use strict';

module.exports = (sequelize, DataTypes) => {
const Comment = sequelize.define("Comment", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ticketID:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    createdby: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      archived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
  tableName: 'Comment',
  freezeTableName: true,
});
Comment.associate = function(models) {
    Comment.belongsTo(models.Ticket, { foreignKey: 'ticketID' })
  };
  return Comment;
}