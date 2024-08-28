const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR ( 255 ),
  last_name VARCHAR ( 255 ),
  email VARCHAR ( 255 ),
  password VARCHAR ( 255 ),
  role VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ),
  text TEXT,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
  user_id INTEGER REFERENCES users
);
`;

async function main() {
  console.log('Seeding...');
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  console.log('Connected to the database');
  await client.query(SQL);
  await client.end();
  console.log('Done');
}

main();
