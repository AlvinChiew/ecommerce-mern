import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errNotFound, errHandler } from './middleware/errorHandler.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('API is running on port ' + port);
});

app.use('/api/products', productRoutes);
app.use(errNotFound, errHandler);

app.listen(port, () => console.log('listening on port ' + port));
