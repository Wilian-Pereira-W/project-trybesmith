import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces/Product';

const getAll = async (): Promise<Product[]> => { 
  const result = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
  const [rows] = result;
  return rows as Product[];
};

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId } = result;

  return { id: insertId, ...product };
};

export default {
  getAll,
  create,
};