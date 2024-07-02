'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('UserAdmins', {
      fields: ['roleId'],
      type: 'foreign key',
      name: 'user_role_id_fkey',
      references: {
        table: 'Roles',
        field: 'id'
      }
    }),

    await queryInterface.addConstraint('Blogs', {
      fields: ['author'],
      type: 'foreign key',
      name: 'blog_user_id_fkey',
      references: {
        table: 'UserAdmins',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('UserAdmins', 'user_role_id_fkey')
    await queryInterface.removeColumn('Blogs', 'blog_user_id_fkey')
  }
};
