"use strict";

const test = require("mocha");
const request = require("supertest");
const { expect } = require('chai');
const app = require("../index");

describe( "GET /drax", () => {
    it("should response with 200 and list", (done) => {
        request(app)
        .get("/drax")
        .expect( 200, 
            "Full-fat milk : 1 cup : 150\nLow fat milk (1%) : 1 cup : 102\nCow's milk : 1 cup : 157\nGoat milk : 1 cup : 264"
        , done);
    });
});

describe( "POST /drax", () => {
    it("should response with 500 and error", (done) => {
        request(app)
        .post("/drax")
        .expect( 500, 
            "Provide data please!"
        , done);
    });
    it("should response with 200 and response then 500 and error", async () => {
        await request(app)
        .post("/drax/?food=Full-fat beer&quantity=3 cup&amount=4")
        .expect( 200, {
            "food": "Full-fat beer",
            "values": {
                "quantity": "3 cup",
                "amount": "4"
             }
        });
        await request(app)
        .post("/drax/?food=Full-fat beer&quantity=3 cup&amount=4")
        .expect( 500, 
            "Food already in table. Use put for changing amount."
        );
    });
});

describe( "PUT /drax", () => {
    it("should response with 500 and error", (done) => {
        request(app)
        .put("/drax")
        .expect( 500, 
            "Provide data please!"
        , done);
    });
    it("should response with 200 and response", (done) => {
        request(app)
        .put("/drax/?food=Full-fat milk&quantity=3 cup&amount=18")
        .expect( 200, {
            "food": "Full-fat milk",
            "values": {
                "quantity": "3 cup",
                "amount": "18"
             }
        }, done);
    });
    it("should response with 500 and error", (done) => {
        request(app)
        .put("/drax/?food=Full-fatty beer&quantity=3 cup&amount=18")
        .expect( 500,
            "No such food."
        , done);
    });
});

describe( "DELETE /drax", () => {
    it("should response with 500 and error", (done) => {
        request(app)
        .delete("/drax")
        .expect( 500, 
            "Provide data please!"
        , done);
    });
    it("should response with 200 and response", (done) => {
        request(app)
        .delete("/drax/?food=Full-fat milk")
        .expect( 200, 
            "Food deleted."
        , done);
    });
    it("should response with 500 and error", (done) => {
        request(app)
        .delete("/drax/?food=Full-fatty beer&quantity=3 cup&amount=18")
        .expect( 500,
            "No such food."
        , done);
    });
});