import express from 'express';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';

import { messageRouter } from './routes/messagesRoute.ts';

// ENV. VARS.
const PORT = dotenv.config().parsed?.PORT || 8080;

// CORS = SECURITY+
app.use(cors());

// PARSE JSON
app.use(express.json());

app.use('/messages', messageRouter);

app.listen(PORT, () => {
  console.log('Servidor corriendose satisfactoriamente!');
});
