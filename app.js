const express = require( 'express');
const app = express(); // crates an instance of an express application
const port = 3000;



app.listen(port, function() {
	console.log("server listening");
});

app.get('/', function(request, response) {
	response.send('ohai')
});
