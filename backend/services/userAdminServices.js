const { UserAdmin } = require('../models');

class UserAdminService {
  static async createUserAdmin(data) {
    try {
      const userAdmin = await UserAdmin.create(data);
      return userAdmin;
    } catch (error) {
      throw new Error('Error creating user admin: ' + error.message);
    }
  }

  static async getUserAdminById(userId) {
    try {
      const userAdmin = await UserAdmin.findByPk(userId);
      if (!userAdmin) {
        throw new Error('User admin not found');
      }
      return userAdmin;
    } catch (error) {
      throw new Error('Error fetching user admin: ' + error.message);
    }
  }

  static async getAllUserAdmins() {
    try {
      const userAdmins = await UserAdmin.findAll();
      return userAdmins;
    } catch (error) {
      throw new Error('Error fetching all user admins: ' + error.message);
    }
  }

  static async updateUserAdmin(userId, data) {
    try {
      const userAdmin = await UserAdmin.findByPk(userId);
      if (!userAdmin) {
        throw new Error('User admin not found');
      }
      await userAdmin.update(data);
      return userAdmin;
    } catch (error) {
      throw new Error('Error updating user admin: ' + error.message);
    }
  }

  static async deleteUserAdmin(userId) {
    try {
      const userAdmin = await UserAdmin.findByPk(userId);
      if (!userAdmin) {
        throw new Error('User admin not found');
      }
      await userAdmin.destroy();
      return { message: 'User admin deleted successfully' };
    } catch (error) {
      throw new Error('Error deleting user admin: ' + error.message);
    }
  }
}

module.exports = UserAdminService;
