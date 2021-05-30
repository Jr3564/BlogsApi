'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Users = await queryInterface.createTable(
      'Users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        displayName:  Sequelize.DataTypes.STRING,
        email:  {
          type: Sequelize.DataTypes.STRING,
          unique: true,
        },
        password: Sequelize.DataTypes.STRING,
        image: Sequelize.DataTypes.STRING,
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
      }
    );
    return Users;
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Users');
  }
};
