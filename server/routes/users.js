var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You found a "users" route! Congrats!');
});

module.exports = router;
