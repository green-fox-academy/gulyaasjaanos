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

app.post("/post/:id", (req,res) => {
    SQL.getSinglePost(req.body.user,req.params.id)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "Something went really wrong."});
        });
});

app.put("/post/:id", (req,res) => {
    SQL.updatePost(req.body.user,req.params.id,req.body.title,req.body.url)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "Something went really wrong."});
        });
});

app.delete("/post/:id", (req,res) => {
    SQL.deletePost(req.body.user,req.params.id)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "Something went really wrong."});
        });
});

app.post("/postit", (req,res) => {
    SQL.postPost(req.body.user,req.body.title,req.body.url)
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