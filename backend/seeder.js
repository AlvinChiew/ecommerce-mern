import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('I - Data Destroyed'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`E - ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const uploadData = async () => {
  try {
    const _users = await User.insertMany(users);
    const adminId = _users[0]._id;
    const _products = products.map((product) => {
      return { ...product, user: adminId };
    });
    await Product.insertMany(_products);

    console.log('I - Data Uploaded'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`E - ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  uploadData();
}
