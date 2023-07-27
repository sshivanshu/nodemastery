const data = require('../data.json');
const model = require('../model/product');
const mongoose = require('mongoose');
const Product = model.Product;

exports.showallproducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.createallproduct = (req, res) => {
  try {
    const product = new Product(req.body);
    product.save();
    res.status(201).json('Product created successfully.');
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product.' });
  }
};

exports.updateproducts = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findOneAndUpdate({ _id: id }, req.body);
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update product.' });
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findOneAndDelete(id);
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product.' });
  }
};

exports.getproductbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product.' });
  }
};
 