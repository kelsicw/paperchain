// this is straight from unit-10-databases, kind of forget what this is actually doing right now
const { Pool } = require('pg');

// this is from my database on ElephantSQL!
const PG_URI =
  'postgres://fylhjlya:FKSV3UkqO7CzOQfnRXfESbI5uIzt2vuC@drona.db.elephantsql.com/fylhjlya';

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

// TODO: How do I actually create what the schema should be? Like with a column for id's and a column for text?
