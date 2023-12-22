import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const userRoutes = express.Router();

userRoutes.route('/').get(protect, admin, getUsers).post(registerUser);
userRoutes
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
userRoutes
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
userRoutes.post('/auth', authUser);
userRoutes.post('/logout', logoutUser);

export default userRoutes;
