import { Product } from '../interfaces/Product';
import ProductsModel from '../models/ProductsModel';

const getAll: () => Promise<Product[]> = async () => {
  const products = await ProductsModel.getAll();
  return products;
};

export default {
  getAll,
};
