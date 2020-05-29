"use strict";

const express = require("express");
const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");
const path = require("path");
const sql = require("./sqlHandler");

app.use(express.static("frontend"));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Welcome to the grocery!");
});

app.get("/shop", (req,res) => {
    res.sendFile(path.join(__dirname+"/./frontend/html/shop.html"));
});

app.get("/wares", (req,res) => {
    sql.getWares()
        .then( results => res.send(results) )
        .catch( error => res.send(error) );
});

app.post("/order", (req,res) => {
    sql.postOrder(generateOrderNumber(),req.body)
        .then( results => res.send(results) )
        .catch( error => res.send(error) );
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

const generateOrderNumber = () => {
    let code = "";
    for (let i = 0; i < 24; i++) {
        const char1 = Math.floor(Math.random() * 26 + 65);
        const char2 = Math.floor(Math.random() * 26 + 97);
        const c = Math.floor(Math.random() * 2 + 1);
        code += (c === 1) ? String.fromCharCode(char1) : String.fromCharCode(char2);
    }
    return code;
};