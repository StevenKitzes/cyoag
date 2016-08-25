var express = require('express');
var Handlebars = require('../hbs-ified/combo');
var router = express.Router();

/* POST buildBody listing. */
router.post('/', function(req, res, next) {
	console.log('/buildBody endpoint reached.');
	
	console.log('Building template contexts.');
	// let's build the context for the Handlebars template to build the HTML body
	var bodyContext = {};
	var headerContext = {pageTitle: 'Create yOur Own Adventure'};
	var trailingSnippetContext = {trailingSnippet: '... and then he ran screaming through the forest, his empty eye sockets yielding twin torrents of BLOOOOOD!!!'};
	var lastPathSnippetContext = {lastPathSnippet: 'Meet him head on, and stab your titanium spork deep into his facepalm!'};
	var nodeSnippetContext = {nodeSnippet: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum<br><br>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'};
	var votificationContext = {
		button1: 'do sth',
		button2: 'do sth else'
	}
	var votifiedPathsContext = {
		votificationTitle: '<h4>Choose your fate!</h4>',
		op1: '<a href="wtvr">option 1</a>',
		op2: '<a href="wtvr">option 2</a>',
		op3: '<a href="wtvr">option 3</a>',
		op4: '<a href="wtvr">option 4</a>'
	};
	var authoringContext = {authoring: '<h4>{Here would go authoring form elements}</h4>'};
	
	console.log('Contexts constructed.');
	
	bodyContext.header = Handlebars.templates['header'](headerContext);
	bodyContext.trailingSnippet = Handlebars.templates['trailingSnippet'](trailingSnippetContext);
	bodyContext.lastPathSnippet = Handlebars.templates['lastPathSnippet'](lastPathSnippetContext);
	bodyContext.nodeSnippet = Handlebars.templates['nodeSnippet'](nodeSnippetContext);
	bodyContext.votification = Handlebars.templates['votification'](votificationContext);
	bodyContext.votifiedPaths = Handlebars.templates['votifiedPaths'](votifiedPathsContext);
	bodyContext.authoring = Handlebars.templates['authoring'](authoringContext);
	
	console.log('Contexts added to unified body context.');
	
	var response = {};
	response.html = Handlebars.templates['body'](bodyContext);
	
	res.send(response);
	console.log('buildBody endpoint complete.');
});

module.exports = router;
