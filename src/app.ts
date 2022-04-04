import express from 'express';
import ProductsControllers from './controllers/ProductsController';
import UsersController from './controllers/UsersController';
import validateProduct from './middleware/validateProduct';
import validateUser from './middleware/validateUser';

const app = express();

app.use(express.json());

app.get('/products', ProductsControllers.getAll);
app.post(
  '/products', 
  validateProduct.validateName, 
  validateProduct.validateAmount,
  ProductsControllers.create,
);
app.post(
  '/users',
  validateUser.validateUsername,
  validateUser.validateClasse,
  validateUser.validateLevel,
  validateUser.validatePassword,
  UsersController.create,
);
export default app;
