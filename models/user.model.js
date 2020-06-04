'use strict';

module.exports = (sequelize, DataTypes) => {
const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mongoID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING(10),
        allowNull: true,
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
  tableName: 'User',
  freezeTableName: true,
});
  User.associate = function(models) {
    User.hasMany(models.UserDepartmentMapping, { foreignKey: 'user' })
    User.hasMany(models.UserRoleMapping, { foreignKey: 'user' })
  };
  return User;
}