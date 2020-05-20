"use strict";

const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

app.use(express.static("frontend"));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/./frontend/html/index.html'));
});

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
});