import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const productRoutes = express.Router();

productRoutes.route('/').get(getProducts).post(protect, admin, createProduct);
productRoutes
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
productRoutes.route('/:id/reviews').post(protect, createProductReview);

export default productRoutes;
