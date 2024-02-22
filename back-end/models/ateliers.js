module.exports = (sequelize, DataTypes) => {
    const Ateliers = sequelize.define("Ateliers", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacite: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        themeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Themes',
                key: 'id',
            },
        },
    });

    Ateliers.associate = (models) => {
        Ateliers.belongsTo(models.Themes, {
            foreignKey: 'themeId',
            as: 'theme',
        });
    };

    return Ateliers;

};