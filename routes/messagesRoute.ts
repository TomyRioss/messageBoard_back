import { Router } from 'express';
import {
  deleteMessages,
  getMessages,
  postMessage,
} from '../controllers/messagesControllers.ts';

export const messageRouter = Router();

// GET (/MESSAGES)
messageRouter.get('/', getMessages);

// POST (/MESSAGES)
messageRouter.post('/', postMessage);

// DELETE (/MESSAGES)
messageRouter.delete('/', deleteMessages);
