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

const getAllMessagesWithUser = async () => {
  const SQL = `
  SELECT messages.id, messages.title, messages.text, messages.timestamp, users.first_name
  FROM messages
  INNER JOIN users
  ON messages.user_id = users.id;
  `;
  const { rows } = await pool.query(SQL);
  return rows;
};

const addMessage = async (title, text, userId) => {
  await pool.query(
    'INSERT INTO messages (title, text, user_id) VALUES ($1, $2, $3)',
    [title, text, userId],
  );
};

const updateToMember = async (userId) => {
  await pool.query("UPDATE users SET role = 'member' WHERE id = $1", [userId]);
};

const updateToAdmin = async (userId) => {
  await pool.query("UPDATE users SET role = 'admin' WHERE id = $1", [userId]);
};

module.exports = {
  getUserByEmail,
  getUserByUsername,
  getUserById,
  addUser,
  getAllMessagesWithUser,
  addMessage,
  updateToAdmin,
};
