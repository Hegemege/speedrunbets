#!/usr/bin/env nodejs
var express = require('express');
var app = express();

app.get('/api/hello', function (req, res) {
    res.end( "Hello World!" );
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('API server running at http://localhost:8080/');
});
