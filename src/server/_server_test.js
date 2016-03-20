/**
 * Created by Daniel on 3/20/2016.
 */
"use strict";

var server = require("./server.js");
var assert = require("assert");

exports.testNothing = function (test) {
    assert.equal(3, server.number(), "number");
    test.done();
};