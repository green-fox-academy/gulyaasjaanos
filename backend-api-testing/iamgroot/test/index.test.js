"use strict";

const test = require("mocha");
const request = require("supertest");
const app = require("../index");

describe( "GET /", () => {
    it("should response with 400 and an eror message", (done) => {
        request(app)
        .get("/groot")
        .expect( 400, {
            error: "I am Groot!"
        }, done);
    });
    it("should response with 200 and a translated message", (done) => {
        request(app)
        .get("/groot/?message=hello")
        .expect( 200, {
            received: "hello",
            translated: "I am Groot!"
        }, done);
    });
});

