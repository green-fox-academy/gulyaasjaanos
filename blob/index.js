"use strict";

const requestHandler = require("./requestHandler");

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendfile("index.html");
});

app.post("/api/links", (req,res) => {
    requestHandler.postLink("url","alias")
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(400).send(error);
        })
});

app.get("/api/links", (req,res) => {
    requestHandler.getLinks()
        .then( (response) => {
            res.send(response);
        });
});


app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});