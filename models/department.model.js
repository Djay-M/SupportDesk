'use strict';

module.exports = (sequelize, DataTypes) => {
const Department = sequelize.define("Department", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(300),
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
  tableName: 'Department',
  freezeTableName: true,
});
Department.associate = function(models) {
    Department.hasMany(models.Ticket, { foreignKey: 'inDepartment' })
    Department.hasMany(models.UserDepartmentMapping, { foreignKey: 'department' })
  };
  return Department;
}