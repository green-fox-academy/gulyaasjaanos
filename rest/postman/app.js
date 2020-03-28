"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.send("get");
});


app.post("/arrays/", (request, response) => {
    let output = {
        "error": "Please provide what to do with the numbers!"
    }
    if (request.body.what === "sum") {
        let result = arraysSum(request.body.numbers)
        output = {
            "result": result
        }
    }
    if (request.body.what === "multiply") {
        let result = arraysMultiply(request.body.numbers)
        output = {
            "result": result
        }
    }
    if (request.body.what === "double") {
        let result = arraysDouble(request.body.numbers)
        output = {
            "result": result
        }
    }
    response.send(output);
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});



function arraysSum(numbers) {
    return numbers.reduce( (a,e) => {
        return (a + e); 
    });
};

function arraysMultiply(numbers) {
    return numbers.reduce( (a,e) => {
        return (a * e); 
    });
};

function arraysDouble(numbers) {
    return numbers.map( (e) => e * 2);
};