import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/User';

const create = async (user: User): Promise<User> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId } = result;

  return { id: insertId, ...user };
};

export default {
  create,
};