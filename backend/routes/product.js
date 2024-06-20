const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/postProduct', productController.createProduct);
router.get('/product/:id', productController.getProductById);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);
router.get('/allProduct', productController.getAllProducts);

module.exports = router;
