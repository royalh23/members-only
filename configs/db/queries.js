const pool = require('./pool');

const getUserByEmail = async (email) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);
  return rows[0];
};

const getUserByUsername = async (username) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [
    username,
  ]);
  return rows[0];
};

const getUserById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return rows[0];
};

const addUser = async (firstName, lastName, email, password) => {
  await pool.query(
    'INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5)',
    [firstName, lastName, email, password, 'non-member'],
  );
};

const getAllMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

const addMessage = async (title, text, userId) => {
  await pool.query(
    'INSERT INTO messages (title, text, user_id) VALUES ($1, $2, $3)',
    [title, text, userId],
  );
};

module.exports = {
  getUserByEmail,
  getUserByUsername,
  getUserById,
  addUser,
  getAllMessages,
  addMessage,
};
