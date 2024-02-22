module.exports = (sequelize, DataTypes) => {
    const Participations = sequelize.define("Participations", {
        utilisateur_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        atelierId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Ateliers',
                key: 'id',
            },
            allowNull: false,
        },
        themeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Themes',
                key: 'id',
            },
            allowNull: false,
        },
        statut: {
            type: DataTypes.ENUM,
            values: ['en_attente', 'confirmé', 'annulé'],
            defaultValue: 'en_attente',
            allowNull: false,
        }
    });

    Participations.associate = (models) => {
        Participations.belongsTo(models.Ateliers, {
            foreignKey: 'atelierId',
            as: 'atelier',
        });
        Participations.belongsTo(models.Themes, {
            foreignKey: 'themeId',
            as: 'theme',
        });
    };

    return Participations;
};