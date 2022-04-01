import express from 'express';
import ProductsControllers from './controllers/ProductsController';
import validateProduct from './middleware/validateProduct';

const app = express();

app.use(express.json());

app.get('/products', ProductsControllers.getAll);
app.post(
  '/products', 
  validateProduct.validateName, 
  validateProduct.validateAmount,
  ProductsControllers.create,
);

export default app;
