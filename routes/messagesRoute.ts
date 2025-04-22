import { Router } from 'express';
import {
  getMessages,
  postMessage,
} from '../controllers/messagesControllers.ts';

export const messageRouter = Router();

messageRouter.get('/', getMessages);

messageRouter.post('/', postMessage);
