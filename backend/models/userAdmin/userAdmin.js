const { DataTypes } = require('sequelize');
const sequelize = require('../../dbconnection/db'); // Adjust path as necessary

const UserAdmin = sequelize.define('UserAdmins', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avtAdmin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true, 
});

module.exports = UserAdmin;
