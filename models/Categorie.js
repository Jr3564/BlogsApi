const defineCategorieModel = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  });

  return Categorie;
};

module.exports = defineCategorieModel;
