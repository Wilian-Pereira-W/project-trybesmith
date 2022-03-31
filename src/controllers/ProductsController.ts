import { Request, Response } from 'express';

import ProductsServices from '../services/ProductsServices';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductsServices.getAll();
  res.status(200).json(products);
};

export default {
  getAll,
};
