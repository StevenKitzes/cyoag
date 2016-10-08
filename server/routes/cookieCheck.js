var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('got cookies: ' + JSON.stringify(req.cookies));
  if(req.cookies.name) {
    console.log('name cookie found');
    res.send('Cookie already there: ' + req.cookies.name + '!');
    return;
  }
  else {
    console.log('name cookie NOT found, creating');
    res.cookie('name', 'steverino').send('Name cookie did not exist, but I created it for you.  You are welcome.');
    return;
  }
});

module.exports = router;
