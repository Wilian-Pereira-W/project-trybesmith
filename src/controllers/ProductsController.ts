import { Request, Response } from 'express';

import ProductsServices from '../services/ProductsServices';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductsServices.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const product = await ProductsServices.create({ name, amount });
  res.status(201).json({ item: product });
};

export default {
  getAll,
  create,
};
