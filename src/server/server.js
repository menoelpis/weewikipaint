/**
 * Created by Daniel on 3/20/2016.
 */
"use strict";

var http = require("http");
var server;

exports.start = function() {
    server = http.createServer();
    server.on("request", function(request, response) {
        response.end();
    });
    server.listen(8080);
};

exports.stop = function(callback) {
    server.close(callback);
};