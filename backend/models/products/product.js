const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const product = Sequelize.define(
  "product",
  {
    ProductId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ProductImage:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductDes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProductPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = product;
