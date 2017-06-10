var mysql = require("mysql");

var config = require("../config");

// MySQL connection setup

var dbConfig = process.env.NODE_ENV === "production"
             ? config.build.mysqlConnection
             : config.dev.mysqlConnection;

dbConfig.connectionLimit = 100;
dbConfig.debug = false;

var pool = mysql.createPool(
    dbConfig
);

// From https://stackoverflow.com/a/38249713

exports.connection = {
    query: function () {
        var queryArgs = Array.prototype.slice.call(arguments);
        var events = [];
        var eventNameIndex = {};

        pool.getConnection(function (err, conn) {
            if (err) {
                if (eventNameIndex.error) {
                    eventNameIndex.error();
                }
            }
            if (conn) {
                var q = conn.query.apply(conn, queryArgs);
                q.on("end", function () {
                    conn.release();
                });

                events.forEach(function (args) {
                    q.on.apply(q, args);
                });
            }
        });

        return {
            on: function (eventName, callback) {
                events.push(Array.prototype.slice.call(arguments));
                eventNameIndex[eventName] = callback;
                return this;
            }
        };
    }
};
