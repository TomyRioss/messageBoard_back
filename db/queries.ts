import pool from './pool.ts';

// TRIGGERED => GET ALL MESSAGES FROM THE DB
const getDBMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

// DEBUGGING DB CONNECTION CONFIGURATION USING ENV
console.log('CONFIG:', {
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PORT: process.env.DB_PORT,
  DB_PASSWORD: process.env.DB_PASSWORD,
});

// TRIGGERED => NEW MESSAGE INTO THE DB
const postDBMessage = async (message: string, date: Date) => {
  await pool.query('INSERT INTO messages (message, date) VALUES ($1, $2)', [
    message,
    date,
  ]);
};

const deleteDBMessage = async (id: number) => {
  await pool.query('DELETE FROM messages WHERE id = $1', [id]);
};

const searchDBMessage = async (search: string) => {
  const { rows } = await pool.query(
    'SELECT * FROM messages WHERE to_tsvector(message) @@ plainto_tsquery($1)',
    [search],
  );
  return rows;
};
export { getDBMessages, postDBMessage, deleteDBMessage, searchDBMessage };
