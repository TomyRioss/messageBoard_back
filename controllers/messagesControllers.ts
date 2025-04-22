import { messages } from '../db.ts';
import { Message } from '../models/message.ts';
import { Request, Response } from 'express';

// _req = NO TYPESCRIPT RAGE
export const getMessages = (_req: Request, res: Response) => {
  res.status(200).json(messages as Message[]);
};

export const postMessage = (req: Request, res: Response) => {
  const body = req.body;
  const message = {
    id: messages.length + 1,
    message: body.message,
    date: body.date,
  };
  messages.push(message);
  res.status(201).json(messages);
};
