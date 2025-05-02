import express from 'express';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';

import { messageRouter } from './routes/messagesRoute.ts';

import { checkMessage } from './middlewares/messageMiddlewares.ts';

// ENV. VARS.
const PORT = dotenv.config().parsed?.PORT || 5173;

// CORS = SECURITY+
app.use(cors());

// PARSE JSON
app.use(express.json());

app.use('/messages', checkMessage, messageRouter);

console.log('Preparando para levantar el servidor...');
app.listen(PORT, () => {
  console.log(`Servidor corriendose satisfactoriamente en el puerto ${PORT}!`);
});
