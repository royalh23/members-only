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

module.exports = { getUserByEmail, getUserByUsername, getUserById, addUser };
