'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Comments', {
      fields: ['IDBlog'],
      type: 'foreign key',
      name: 'comment_blog_id_fkey',
      references: {
        table: 'Blogs',
        field: 'id'
      }
    });

    await queryInterface.addConstraint('Comments', {
      fields: ['IDUser'],
      type: 'foreign key',
      name: 'comment_user_id_fkey',
      references: {
        table: 'users',
        field: 'id'
      }
    });

    // Ràng buộc ngược lại cho Blogs
    await queryInterface.addConstraint('Blogs', {
      fields: ['id'],
      type: 'foreign key',
      name: 'blog_comments_fkey',
      references: {
        table: 'Comments',
        field: 'IDBlog'
      },
    });

    // Ràng buộc ngược lại cho Users
    await queryInterface.addConstraint('users', {
      fields: ['id'],
      type: 'foreign key',
      name: 'user_comments_fkey',
      references: {
        table: 'Comments',
        field: 'IDUser'
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Comments', 'comment_blog_id_fkey');
    await queryInterface.removeConstraint('Comments', 'comment_user_id_fkey');
    await queryInterface.removeConstraint('Blogs', 'blog_comments_fkey');
    await queryInterface.removeConstraint('users', 'user_comments_fkey');
  }
};