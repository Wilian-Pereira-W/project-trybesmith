import express from 'express';
import ProductsControllers from './controllers/ProductsController';

const app = express();

app.use(express.json());

app.get('/products', ProductsControllers.getAll);

export default app;
