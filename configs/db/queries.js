const pool = require('./pool');

const findUserByEmail = async (email) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);
  return rows[0];
};

const addUser = async (firstName, lastName, email, password) => {
  await pool.query(
    'INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5)',
    [firstName, lastName, email, password, 'non-member'],
  );
};

module.exports = { findUserByEmail, addUser };
