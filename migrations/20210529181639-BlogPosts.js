'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = await queryInterface.createTable(
      'BlogPosts', {
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
        updated: {
          allowNull: false,
          type: Sequelize.DATE
        },
/*         createAt: {
          type: Sequelize.DATE,
          field: 'published'
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'updated'
        }, */
      }
    );
    return PostsCategories;
  },

  down: async (queryInterface, Sequelze) => {
    return await queryInterface.dropTable('BlogPosts');
  }
}