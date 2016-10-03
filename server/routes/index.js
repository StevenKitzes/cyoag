var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('You found an "index" route! Congrats!');
});

module.exports = router;
