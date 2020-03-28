"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(express.static("assets"));
app.use(bodyParser.json());

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

app.get("/greeter/", (req, res) => {
    let response = {
        "error": "Please provide a name and a title!"
    };
    let status = 400;
    if (req.query.name && !req.query.title) {
        response = {
            "error": "Please provide a title!"
        }
    } else if (!req.query.name && req.query.title) {
        response = {
            "error": "Please provide a name!"
        }
    } if (req.query.name && req.query.title) {
        response = {
            "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        }
        status = 200;
    }
    res.status(status).send(response);
});

app.get("/appenda/:appendable", (req, res) => {
    if (!req.params.appendable) {
        res.status(404).send();
    } else {
        res.send({
            "appended": req.params.appendable + "a"
        });
    };
});

app.post("/dountil/:action", (req, res) => {
    let response = {
        "error": "Please provide a number!"
    };
    if (req.body.until) {
        response = {
            "error": "Please provide an action!"
        };
        if (req.params.action === "sum") {
            response = {
                "result": sum(req.body.until)
            };
        }
        if (req.params.action === "factor") {
            response = {
                "result": factor(req.body.until)
            };
        }
    };
    res.send(response);
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});


function sum(u) {
    let output = 0;
    for ( let i = 0; i <= u; i++) {
        output += i;
    }
    return output;
}

function factor(u) {
    let output = 1;
    for ( let i = 1; i <= u; i++) {
        output *= i;
    }
    return output;
}