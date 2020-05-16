"use strict";

const express = require("express");
const app = express();
const SQL = require("./requestHandlerSQL");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static("frontend"));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/./frontend/main.html'));
});

app.post("/posts/", (req,res) => {
    SQL.getPosts(req.body.user)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "No posts, pal."});
        });
});

app.put("/posts/:id/upvote", (req,res) => {
    SQL.putVote(req.body.user,req.params.id,1)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "Something went really wrong."});
        });
});

app.put("/posts/:id/downvote", (req,res) => {
    SQL.putVote(req.body.user,req.params.id,-1)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "Something went really wrong."});
        });
});

app.listen(8080, () => {
    console.log(`server running at port 8080`);
});