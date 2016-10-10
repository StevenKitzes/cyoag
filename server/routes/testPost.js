// Relevant require's . . .
var express = require('express');
var router = express.Router();

// Warn anyone trying to acces this endpoint via a GET request
router.get('/', function(req, res, next) {
  res.send('This is a POST method; you have arrived here by mistake.<br><br>...or were you trying to be a sneak?');
});

// POST request, the kind we want at this endpoint!
router.post('/', function(req, res, next) {
  // Ghetto simulation of user authentication
  if(req.body.foo == 'bar') {
    // Get a reference to our SQL database connection pool
    var pool = require('../dbAccess')();

    // Use pool to query ... callback runs on result, success or fail
    pool.query('SELECT * FROM users;', function(err, rows, fields) {
      // In case of query error
      if(err) {
        res.send(err);
        return;
      }
      // In case of successful query with no results
      if(rows.length < 1) {
        res.send('Got no rows back.  :(');
        return;
      }
      // In case of successful query
      res.send('Got ' + rows.length + ' rows back!');
      return;
    });
  } else {
    // Handle failed ghetto authentication placeholder
    res.send('Got unexpected content.');
  }
});

// Expose router for Express
module.exports = router;
