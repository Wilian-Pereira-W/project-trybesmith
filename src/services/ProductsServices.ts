import { Product } from '../interfaces/Product';
import ProductsModel from '../models/ProductsModel';

const getAll = async (): Promise<Product[]> => {
  const products = await ProductsModel.getAll();
  return products;
};

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const createProduct = await ProductsModel.create({ name, amount });
  return createProduct;
};

export default {
  getAll,
  create,
};
