const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const Comments = Sequelize.define(
  "Comments",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    IDBlog: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IDUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content:{
      type: DataTypes.TEXT,
      allowNull: false
    } 
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Comments;
