
module.exports = (sequelize, DataTypes) => {
  const UserDepartmentMapping = sequelize.define('UserDepartmentMapping', {
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
    department: {
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
    tableName: 'UserDepartmentMapping',
    freezeTableName: true,
  });
  UserDepartmentMapping.associate = (models) => {
    UserDepartmentMapping.belongsTo(models.User, { foreignKey: 'user' });
    UserDepartmentMapping.belongsTo(models.Department, { foreignKey: 'department' });
  };
  return UserDepartmentMapping;
};
