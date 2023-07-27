const userController = require('../controller/user.js');
const express = require('express');
const router = express.Router();

router.get('/', userController.showallproducts);
router.get('/:id', userController.getproductbyid);
router.post('/', userController.createallproduct);
router.patch('/:id', userController.updateproducts);
router.delete('/:id', userController.deleteproduct);

exports.router = router;
