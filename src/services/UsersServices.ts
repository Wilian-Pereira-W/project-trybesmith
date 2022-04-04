import { User } from '../interfaces/User';
import UsersModel from '../models/UsersModel';

const create = async (user: User): Promise<User> => {
  const { username, classe, level, password } = user;
  const createUser = await UsersModel.create({ username, classe, level, password });
  return createUser;
};

export default {
  create,
};