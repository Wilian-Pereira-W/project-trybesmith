import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UsersServices from '../services/UsersServices';

const jwtConfig = {
  expiresIn: '1d',
};
const SECRET = 'seusecretdetoken';
const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const user = await UsersServices.create({ username, classe, level, password });
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  console.log(token);
  res.status(201).json({ token });
};

export default {
  create,
};
