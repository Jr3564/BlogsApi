'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPosts = await queryInterface.createTable(
      'BlogPosts',
      {
        postId: Sequelize.INTEGER,
        categoryId: Sequelize.INTEGER,
      }
    );
    return BlogPosts;
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('BlogPosts');
  }
};
