'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = await queryInterface.createTable(
      'PostsCategories', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        title:  Sequelize.DataTypes.STRING,
        content: Sequelize.DataTypes.STRING,
        userId: {
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        published: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated:  {
          allowNull: false,
          type: Sequelize.DATE
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      }
    );
    return PostsCategories;
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('PostsCategories');
  }
};
