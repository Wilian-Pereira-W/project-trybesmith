import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../interfaces/Order';

const getAll = async (): Promise<Order[]> => { 
  const result = await connection
    .execute<RowDataPacket[]>(`
      SELECT 
        o.id AS id, 
        o.userid AS UserId,
        p.id AS products 
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON o.id = p.orderid;
    `);
  const [rows] = result;
  const order = rows
    .map(({ id, UserId, products }) => ({ id, userId: UserId, products: [products] }));
  return order as Order[];
};

export default {
  getAll,
};