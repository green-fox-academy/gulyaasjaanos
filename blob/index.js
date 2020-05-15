"use strict";

const requestHandler = require("./requestHandlerSQL");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.sendfile("index.html");
});

app.post("/api/links", (req,res) => {
    requestHandler.postLink(req.body.url,req.body.alias)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send({error: "Your alias is already in use!"});
        });
});

app.get("/api/links", (req,res) => {
    requestHandler.getLinks()
        .then( (response) => {
            res.send(response);
        });
});

app.get("/a/:alias", (req,res) => {
    requestHandler.getALink(req.params.alias)
        .then( (response) => {
            res.statusCode = 302;
            res.setHeader("Location", response);
            res.end();
        })
        .catch( (error) => {
            res.status(error).send("not found");
        });
});

app.delete("/api/links/:id", (req,res) => {
    requestHandler.deleteALink(req.params.id, req.body.secretCode)
        .then( (response) => {
            res.send(response);
        })
        .catch( (error) => {
            res.status(error).send();
        });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});