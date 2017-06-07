var express = require("express");
var app = express();

// Announce all api routes

app.get("/api", function (req, res) {
    res.end("SpeedRunBets API");
});

// API routes

app.get("/api/hello", function (req, res) {
    res.end("Hello World!");
});

// Start server

var server = app.listen(8080, function () {
    console.log("API server running at http://localhost:8080/");
});

module.exports = {
    close: () => {
        server.close();
    }
};
