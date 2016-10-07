var mysql = require('mysql');

var pool;

function db() {
  if(pool == null || pool == undefined) {
    console.log('Setting up database.');

    pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'cyoag'
    });
  }

  return pool;
}

module.exports = this.db;
