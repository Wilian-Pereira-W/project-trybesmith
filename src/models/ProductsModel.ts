import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/Product';

const getAll : () => Promise<Product[]> = async () => { 
  const result = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  const [rows] = result;
  return rows as Product[];
};

export default {
  getAll,
};