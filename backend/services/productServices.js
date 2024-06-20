const { model, Sequelize, Product } = require("../models/index");


class ProductService {
  async createProduct(data) {
    try {
      const product = await Product.create(data);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, data) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.update(data);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
      return product;
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
