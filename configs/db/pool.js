const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
  connectionString:
    process.env.NODE_ENV === 'dev'
      ? process.env.PG_LOCAL
      : process.env.PG_REMOTE,
});
