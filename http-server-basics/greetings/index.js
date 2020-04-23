"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get( "/", (req,res) => {
    let {name="Guest"} = req.query;
    res.render("home.ejs", {
        name: name
    });
});

app.listen(PORT, () => {
    console.log("listening on 3000");
});