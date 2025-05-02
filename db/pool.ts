import dotenv from 'dotenv';
import { Pool } from 'pg';

// LOAD ENVIRONMENT VARIABLES
dotenv.config();

// DB CONNECTION CONFIGURATION USING ENV
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;
