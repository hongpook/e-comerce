const User = require("./users/user");
const cart = require("./carts/cart");
const category = require("./categories/categ");
const product = require("./products/product");
const Sequelize = require("../dbconnection/db");

User.hasMany(cart, { onDelete: "CASCADE" });
cart.belongsTo(User, { onDelete: "CASCADE" });

category.hasMany(product, { onDelete: "CASCADE" });
product.belongsTo(category, { onDelete: "CASCADE" });

product.belongsToMany(cart, {
  onDelete: "CASCADE",
  through: "Product_cart", // This will Juanction Table Name
  foreignKey: {
    name: "ProductID", //
    allowNull: false,
    unique: true,
  },
});
cart.belongsToMany(product, {
  onDelete: "CASCADE",
  through: "Product_cart", // This will Juanction Table Name
  foreignKey: {
    name: "ProductID", //
    allowNull: false,
    unique: true,
  },
});

const model = Sequelize.models;

module.exports = { model, Sequelize, User};

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