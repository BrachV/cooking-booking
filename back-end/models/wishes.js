module.exports = (sequelize, DataTypes) => {
  const Wishes = sequelize.define("Wishes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    utilisateur_nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    utilisateur_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ordre_de_preference: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Represente la preference de l'utilisateur pour cet atelier"
    },
    themeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
    nombre_participations_souhaitees: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1,
      }
    },
  });

  Wishes.associate = (models) => {
    Wishes.belongsTo(models.Themes, {
      foreignKey: 'themeId',
      as: 'theme',
    });
  };

  return Wishes;
};