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


app.post("/sith/", (request, response) => {
    let output = {
        "error": "Feed me some text you have to, padawan young you are. Hmmm."
    }
    if (request.body.text) {
        output = {
            "sith_text": sithText(request.body.text)
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

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const randomYoda = () => {
    const cleverness = [
        "Hmmm.",
        "Err..err.err.",
        "Arrrgh.",
        "Uhhm.",
        "Good."
    ]
    let d = Math.floor(Math.random() * 2) + 1;
    let n1 = Math.floor(Math.random() * cleverness.length);
    let n2 = Math.floor(Math.random() * cleverness.length);
    return (d === 1)? cleverness[n1] : cleverness[n1] + " " + cleverness[n2];
};
    



function sithText(text) {
    let textArray = text.split(". ");
    let newArray = textArray.map( (e) => {
        let eArray = e.split(" ");
        for (let i = 0; i < eArray.length-1; i = i + 2) {
            let A = (i === 0)? eArray[i].toLowerCase() : eArray[i] ;
            eArray[i] = (i === 0)? capitalize(eArray[i+1]).trim() : eArray[i+1].trim();
            eArray[i+1] = A.trim();
        }
        return eArray.join(" ");
    }).join(". " + randomYoda() + " ");
    newArray += " " + randomYoda();
    return newArray;
};