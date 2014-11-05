var util = require('util');
var express = require('express');
var path = require('path');
var app = express();

var folder = 'public';

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, folder)));

app.get('/hello', function(req, res){
    res.send({
    	id: Math.floor(Math.random() * 100),
    	name: "Info"
    });
});

app.get('/', function(req, res){
    res.render('index',
	{ 
		title : 'Home' 
	});
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

