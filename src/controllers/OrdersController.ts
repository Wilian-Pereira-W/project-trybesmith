import { Request, Response } from 'express';

import OrdersServices from '../services/OrdersServices';

const getAll = async (_req: Request, res: Response) => {
  const orders = await OrdersServices.getAll();
  res.status(200).json(orders);
};

export default {
  getAll,
};
