"use strict";

const test = require("mocha");
const request = require("supertest");
const { expect } = require('chai');
const app = require("../index");

describe( "GET /rocket/fill", () => {
    it("should response with 400 and an eror message", (done) => {
        request(app)
        .get("/rocket/fill")
        .expect( (response) => {
            response.body.error = "Data please!";
        })
        .expect(400,done);
    });

    it("should response with 200 and calculated data", async () => {
        await request(app)
            .get("/rocket/fill/?caliber=.50&amount=5000")
            .expect( 200, {
                received: ".50",
                amount: "5000",
                shipstatus: "40%",
                ready: false
            });
        await request(app)
            .get("/rocket/fill/?caliber=.50&amount=5000")
            .expect( 200, {
                received: ".50",
                amount: "5000",
                shipstatus: "80%",
                ready: false
            });
        await request(app)
            .get("/rocket/fill/?caliber=.30&amount=2500")
            .expect( 200, {
                received: ".30",
                amount: "2500",
                shipstatus: "full",
                ready: true
            });
        await request(app)
            .get("/rocket")
            .expect( 200, {
                "caliber25": 0,
                "caliber30": 2500,
                "caliber50": 10000,
                "shipstatus": "full",
                "ready": true
            });
    });


    
});

