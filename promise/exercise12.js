"use strict";

const HTTP = require("q-io/http");

HTTP.read("http://localhost:1337")
.then(function (content) {
    console.log(JSON.parse(content));
})