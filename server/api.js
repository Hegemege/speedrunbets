var express = require("express");
var app = express();

var db = require("./db.js");

// Hot reloading
if (process.env.NODE_ENV !== "production") {

}

// Announce all api routes

app.get("/api", function (req, res) {
    res.end("SpeedRunBets API");
});

// API routes

app.get("/api/hello", function (req, res) {
    var resultRows = [];

    db.connection.query(
        `
            SELECT Id,
                   Name,
                   Description
            FROM Game
        `)
        .on("result", function (row) {
            resultRows.push(row);
        })
        .on("error", function (err) {
            console.log(err);
            res.status(500).send("500 - Internal server error");
        })
        .on("end", function () {
            res.end(JSON.stringify(resultRows));
        });
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
