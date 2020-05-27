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
    res.sendFile(path.join(__dirname+"/./frontend/html/index.html"));
});

app.get("/tasks", (req,res) => {
    sql.getTasks()
        .then( (results) => res.send(results) )
        .catch( (error) => res.send(error) )
});

app.post("/tasks", (req,res) => {
    sql.postTask(req.body.task,req.body.description,req.body.urgency)
        .then( (results) => res.send({results}) )
        .catch( (error) => res.send(error) )
});

app.get("/tasks/:id", (req,res) => {
    sql.getSingleTask(req.params.id)
        .then( (results) => res.send({results}) )
        .catch( (error) => res.send(error) )
});

app.put("/tasks/:id", (req,res) => {
    sql.modifyTask(req.body.task,req.body.description,req.body.urgency,req.params.id)
        .then( (results) => res.send({results}) )
        .catch( (error) => res.send(error) )
});

app.put("/tasks/:id/solved", (req,res) => {
    sql.modifyStatus("solved",req.params.id)
        .then( (results) => res.send({results}) )
        .catch( (error) => res.send(error) )
});
app.put("/tasks/:id/active", (req,res) => {
    sql.modifyStatus("active",req.params.id)
        .then( (results) => res.send({results}) )
        .catch( (error) => res.send(error) )
});

app.delete("/tasks/:id", (req,res) => {
    sql.deleteTask(req.params.id)
        .then( (results) => res.send({results}) )
        .catch( (error) => res.send(error) )
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});