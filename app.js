var express = require('express');
var app = express();
var path = require('path');

app.set("port",3000);

app.get('/', function(req, res){
	console.log("Get the HomePage");
	res.status(200).sendFile(path.join(__dirname,"public","index.html"));
});

app.get('/json', function(req, res){
	console.log("Get the JSON");
	res.status(200).json({"jsonData" : true});
});

app.get('/file', function(req, res){
	console.log("Get the File");
	res.status(200).sendFile(path.join(__dirname,"app.js"));
});

var server = app.listen(app.get("port"),function(){
	var port = server.address().port;
	console.log("The app is listening on port: "+port);	
});


