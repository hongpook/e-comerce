// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Blogs extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Blogs.init({
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     image: DataTypes.STRING,
//     author: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Blogs',
//   });
//   return Blogs;
// };

const { DataTypes } = require("sequelize");
const sequelize = require("../../dbconnection/db");

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Blog 