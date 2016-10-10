// Require the MySQL library for NodeJS
var mysql = require('mysql');

// This is a connection pool, which will be made available to this app's routes
var pool;

// This is the function we'll actually expose via module.exports; it returns
//    a reference to this module's SQL database connection pool
function db() {
  if(pool == null || pool == undefined) {
    console.log('Connection pool did not exist yet.  Setting it up.');

    // Create the connection pool if it didn't exist yet, using mostly defaults
    pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'cyoag'
    });
  }

  // Return ref to the pool we created, or if it already existed, return it
  return pool;
}

// Expose the function that returns a reference to the connection pool
module.exports = db;
