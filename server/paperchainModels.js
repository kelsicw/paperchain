require('dotenv').config();
const { Pool } = require('pg');

const PG_URI = process.env.DB_URI;

// connection string connects to the database via a pool. The pool manages our connections to the database
// this makes our database queries more performant instead of having to wait for process of establishing new connections each time we send a query
const pool = new Pool({
  connectionString: PG_URI,
});

// exporting an object with property query
// query is a function that returns invocation of pool.query (which is how we send queries) after logging the query
// this will be required in the controller to be access point to database!

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
