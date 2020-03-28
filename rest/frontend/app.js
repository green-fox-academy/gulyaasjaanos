"use strict";

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/doubling/", (req, res) => {
    let response = {
        "error": "Please provide an input!"
    };
    if (req.query.input) {
        response = {
            "received": 1 * req.query.input,
            "result": 2 * req.query.input
        }
    }
    res.send(response);

});



app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});