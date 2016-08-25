var cyoag = {};

// build body
cyoag.buildBody = function() {
	console.log('Attempting to retrive CYOAG page body from server.');
	$.post(
		'/buildBody',
		{},
		function(response) {
			console.log('Got response from server on /buildBody endpoint');
			if(response.hasOwnProperty('error')) {
				// handle error
				console.log('ERROR FATALE: ' + response.error);
				return;
			}
			$('body').html(response.html);
		}
	);
}