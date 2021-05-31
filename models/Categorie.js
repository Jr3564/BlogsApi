const defineCategorieModel = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, { timestamps: false });

  return Categorie;
};

module.exports = defineCategorieModel;
