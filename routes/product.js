const productController = require('../controller/product.js');
const express = require('express');
const router = express.Router();

router.get('/', productController.showallproducts);
router.get('/:id', productController.getproductbyid);
router.post('/', productController.createallproduct);
router.patch('/:id', productController.updateproducts);
router.delete('/:id', productController.deleteproduct);

exports.router = router;
