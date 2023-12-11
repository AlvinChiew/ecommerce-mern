import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
// import products from '../data/products'
import Product from '../models/productModel.js';

const productRoutes = express.Router();

productRoutes.get(
  '/',
  asyncHandler(async (req, res) => {
    // throw new Error('Sample');
    const products = await Product.find({});
    res.json(products);
  })
);

productRoutes.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }

    res.status(404);
    throw new Error('E - Product not found');
  })
);

export default productRoutes;
