var express = require('express');
var app = express();
var path = require('path');

app.use('/node_modules', express.static(path.join(__dirname+'/node_modules')));
app.use('/', express.static(path.join(__dirname+'/')));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);