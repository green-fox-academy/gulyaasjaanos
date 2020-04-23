"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    const todos = ["get up", "survive", "go back to bed"];
    res.render("todos.ejs", {
        todos: todos
    });
});

app.listen(PORT, () => {
    console.log("listening on 3000");
})