module.exports = (sequelize, DataTypes, Account) => {
  const Wishes = sequelize.define("Wishes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
      
  });

  Wishes.associate = (models) => {

  };

  return Wishes;
};
