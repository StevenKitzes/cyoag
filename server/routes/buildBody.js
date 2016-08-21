var express = require('express');
var Handlebars = require('../hbs-ified/combo');
var router = express.Router();

/* POST buildBody listing. */
router.post('/', function(req, res, next) {
	console.log('buildBody endpoint reached.');
	
	var response = {};
	
	response.html = Handlebars.templates['header']({pageTitle: 'Yay header'});
	
	res.send(response);
	console.log('buildBody endpoint complete.');
});

module.exports = router;
