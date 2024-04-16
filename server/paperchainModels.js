// Load environment variables from the .env file
require('dotenv').config();

// Import the Pool class from the PostgreSQL library
const { Pool } = require('pg');

// This file sets up a connection to the PostgreSQL database
// For security, the database connection URI is stored in the DB_URI environment variable
const PG_URI = process.env.DB_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
