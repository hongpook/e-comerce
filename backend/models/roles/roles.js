const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const role = Sequelize.define(
  "role",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    maRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = role;
