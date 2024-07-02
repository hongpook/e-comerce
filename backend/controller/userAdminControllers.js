const UserAdminService = require('../services/userAdminServices');

class UserAdminController {
  static async createUserAdmin(req, res) {
    try {
      const userAdmin = await UserAdminService.createUserAdmin(req.body);
      res.status(201).json(userAdmin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUserAdminById(req, res) {
    try {
      const userId = req.params.id;
      const userAdmin = await UserAdminService.getUserAdminById(userId);
      res.status(200).json(userAdmin);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async getAllUserAdmins(req, res) {
    try {
      const userAdmins = await UserAdminService.getAllUserAdmins();
      res.status(200).json(userAdmins);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUserAdmin(req, res) {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const updatedUserAdmin = await UserAdminService.updateUserAdmin(userId, updatedData);
      res.status(200).json(updatedUserAdmin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteUserAdmin(req, res) {
    try {
      const userId = req.params.id;
      await UserAdminService.deleteUserAdmin(userId);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserAdminController;
