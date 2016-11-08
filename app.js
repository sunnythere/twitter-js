const express = require( 'express');
const chalk = require('chalk');
const app = express(); // crates an instance of an express application
const port = 3000;




app.listen(port, function() {
	console.log(chalk.blue.italic("server listening"));
});

app.all('/', function (req, res, next) {
	console.log(chalk.green(req.method));
	next();
	console.log(`good ${req.method}!`);
})

app.get('/', function(request, response) {
	response.send('hello');
});

app.get('/bears', function(request, response) {
	response.send('Sorry, there are no bears here.');
});
