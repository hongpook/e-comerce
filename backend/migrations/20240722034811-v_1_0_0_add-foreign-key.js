'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Comments', {
      fields: ['IDBlog'],
      type: 'foreign key',
      name: 'comment_blog_id_fkey',
      references: {
        table: 'Blogs',
        field: 'id'
      }
    }),

    await queryInterface.addConstraint('Comments', {
      fields: ['IDUser'],
      type: 'foreign key',
      name: 'comment_user_id_fkey',
      references: {
        table: 'users',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Comments', 'comment_blog_id_fkey')
    await queryInterface.removeColumn('Comments', 'comment_user_id_fkey')
  }
};
