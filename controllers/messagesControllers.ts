import {
  getDBMessages,
  postDBMessage,
  deleteDBMessage,
} from '../db/queries.ts';
import { Request, Response } from 'express';

// _req = NO TYPESCRIPT RAGE / GET ALL MESSAGES
// _req = NO TYPESCRIPT RAGE / GET ALL MESAGES
export const getMessages = async (_req: Request, res: Response) => {
  const messages = await getDBMessages();
  res.status(200).json(messages);
};

// POST (body = {MESSAGE & DATE}) => MESSAGE.DB
export const postMessage = async (req: Request, res: Response) => {
  const { message, date } = req.body;
  await postDBMessage(message, date);
  res.status(200).json({ message: 'Mensaje añadido correctamente!' });
};

// DEL (ID) => DELETE MESSAGE.DB
export const deleteMessages = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteDBMessage(id);
  res.status(200).json({ message: 'Mensaje eliminado correctamente!' });
};
