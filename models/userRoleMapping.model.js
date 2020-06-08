
module.exports = (sequelize, DataTypes) => {
  const UserRoleMapping = sequelize.define('UserRoleMapping', {
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
    role: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    tableName: 'UserRoleMapping',
    freezeTableName: true,
  });

  UserRoleMapping.associate = (models) => {
    UserRoleMapping.belongsTo(models.User, { foreignKey: 'user' });
    UserRoleMapping.belongsTo(models.Role, { foreignKey: 'role' });
  };

  return UserRoleMapping;
};
