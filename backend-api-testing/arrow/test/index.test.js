"use strict";

const test = require("mocha");
const request = require("supertest");
const app = require("../index");

describe( "GET /", () => {
    it("should response with 400 and an eror message", (done) => {
        request(app)
        .get("/yondu")
        .expect( 400, {
            error: "Data please!"
        }, done);
    });
    it("should response with 200 and calculated data", (done) => {
        request(app)
        .get("/yondu/?distance=100.0&time=10.0")
        .expect( 200, {
            distance: "100.0",
            time: "10.0",
            speed: "10.0",
        }, done);
    });
});

