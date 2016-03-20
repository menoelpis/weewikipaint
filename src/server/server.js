/**
 * Created by Daniel on 3/20/2016.
 */
"use strict";

var http = require("http");
var server;

exports.start = function() {

    console.log("start called");
    server = http.createServer();
    console.log("server called");

    server.on("request", function(request, response) {
       console.log("request called");

        var body = "<html><head><title>Node HTTP</title></head>" +
                "<body><p>This is a Node's HTTP Server</p></body></html>";
        response.end(body);
    });
    console.log("'on' called");

    server.listen(8080);
    console.log("listen called");
};

exports.stop = function(callback) {
    console.log("stop called");
    server.close(callback);
};