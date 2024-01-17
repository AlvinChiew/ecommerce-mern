import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

const productRoutes = express.Router();

productRoutes.route('/').get(getProducts).post(protect, admin, createProduct);
productRoutes.get('/top', getTopProducts);
productRoutes
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);
productRoutes
  .route('/:id/reviews')
  .post(protect, checkObjectId, createProductReview);

export default productRoutes;
