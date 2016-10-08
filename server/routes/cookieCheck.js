var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

/* GET home page. */
router.post('/', function(req, res, next) {
  var responseString = '';

  if (!req.cookies.name) {
    console.log('name cookie not found, creating');
    res.cookie('name', 'steverino');
    responseString += 'Added name cookie ';
  }
  else {
    responseString += 'Name cookie already existed. ';
  }

  if(!req.cookies.number) {
    console.log('number cookie not found, creating');
    res.cookie('number', 12345);
    responseString += 'Added number cookie ';
  }
  else {
    responseString += 'Number cookie already existed. ';
  }

  res.send('Cookies managed ... ' + responseString);
});

module.exports = router;
