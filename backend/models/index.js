const User = require("./users/user");
const cart = require("./carts/cart");
const category = require("./categories/categ");
const Product = require("./products/product");
const Blog = require('./blogs/blogs')
const Sequelize = require("../dbconnection/db");
const UserAdmin = require('./userAdmin/userAdmin')
const Comments = require("./comment/comments")

User.hasMany(cart, { onDelete: "CASCADE" });
cart.belongsTo(User, { onDelete: "CASCADE" });

User.hasMany(Comments, {onDelete: "CASCADE"});

// Blog.hasMany(Comments, {
//   foreignKey: 'IDBlog',
//   as: 'comments',
//   onDelete: 'CASCADE'
// });

// Comments.belongsTo(Blog, {
//   foreignKey: 'IDBlog',
//   as: 'blog'
// });
// Comments.belongsTo(User, {
//   foreignKey: 'IDUser',
//   as: 'user'
// });

category.hasMany(Product, { onDelete: "CASCADE" });
Product.belongsTo(category, { onDelete: "CASCADE" });

Comments.belongsToMany(Blog, {
  onDelete: "CASCADE",
  through: "Blog", // This will Juanction Table Name
  foreignKey: {
    name: "IDBlog", //
    allowNull: false,
    unique: true,
  },
});


Product.belongsToMany(cart, {
  onDelete: "CASCADE",
  through: "Product_cart", // This will Juanction Table Name
  foreignKey: {
    name: "ProductID", //
    allowNull: false,
    unique: true,
  },
});
cart.belongsToMany(Product, {
  onDelete: "CASCADE",
  through: "Product_cart", // This will Juanction Table Name
  foreignKey: {
    name: "ProductID", //
    allowNull: false,
    unique: true,
  },
});

const model = Sequelize.models;

module.exports = { model, Sequelize, User, Product , Blog, UserAdmin, Comments};

// const User = require('../models/users/user');

// const db = {
//   Sequelize,
//   User,
// };

// // Đồng bộ hóa tất cả các mô hình
// db.Sequelize.sync().then(() => {
//   console.log("Database synchronized");
// }).catch((error) => {
//   console.error("Error synchronizing database:", error);
// });

// module.exports = db;