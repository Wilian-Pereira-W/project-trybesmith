import { Order } from '../interfaces/Order';
import OrdersModal from '../models/OrdersModel';

const getAll = async (): Promise<Order[]> => {
  const orders = await OrdersModal.getAll();
  return orders;
};

export default {
  getAll,
};
