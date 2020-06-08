
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
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
    tableName: 'Role',
    freezeTableName: true,
  });
  Role.associate = (models) => {
    Role.hasMany(models.UserRoleMapping, { foreignKey: 'role' });
  };
  return Role;
};
