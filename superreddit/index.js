"use strict";

const express = require("express");
const app = express();
const SQL = require("./requestHandlerSQL");

app.use(express.static("frontend"));

app.get("/", (req,res) => {
    res.render("index.html");
});

app.get("/posts/", (req,res) => {
    SQL.getPosts()
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "No posts, pal."});
        });
});

app.listen(8080, () => {
    console.log(`server running at port 8080`);
});