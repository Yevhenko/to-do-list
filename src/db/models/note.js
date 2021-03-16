module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    'Note',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      actual: DataTypes.DATEONLY,
      categoryId: DataTypes.INTEGER,
    },
    {},
  );
  Note.associate = (models) => {
    // associations can be defined here
    Note.belongsTo(models.Category, { foreignKey: 'categoryId', targetKey: 'id' });
  };
  return Note;
};
