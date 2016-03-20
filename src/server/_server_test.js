/**
 * Created by Daniel on 3/20/2016.
 */
"use strict";

var server = require("./server.js");

exports.testNothing = function (test) {
    test.equals(3, server.number(), "number");
    test.done();
};