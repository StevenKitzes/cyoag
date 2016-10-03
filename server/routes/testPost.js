var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is a POST method; you have arrived here by mistake.<br><br>...or were you trying to be a sneak?');
});
router.post('/', function(req, res, next) {
  if(req.body.foo == 'bar') {
    res.send('Got content!  Hooray!');
  } else {
    res.send('Got unexpected content.');
  }
});

module.exports = router;
