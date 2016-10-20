// Require the MySQL library for NodeJS
var mysql = require('mysql');
var secrets = require('./secrets');

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
      user: secrets.SQL_USER,
      password: secrets.SQL_PASS,
      database: 'cyoag'
    });
  }

  // Return ref to the pool we created, or if it already existed, return it
  return pool;
}

// Expose the function that returns a reference to the connection pool
module.exports = db;

/* SIMPLE USAGE SAMPLE: */
// var mysql = require('mysql');
// var pool  = mysql.createPool(...);
//
// pool.getConnection(function(err, connection) {
//   // Use the connection
//   connection.query( 'SELECT something FROM sometable', function(err, rows) {
//     // And done with the connection.
//     connection.release();
//
//     // Don't use the connection here, it has been returned to the pool.
//   });
// });
