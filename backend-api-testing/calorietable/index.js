"use strict";

const express = require("express");
const app = express();
const dataHandler = require("./dataHandler");



app.get("/drax", (req, res) => {
  dataHandler.getData()
    .then( (result) => res.send(result) );
});

app.post("/drax", (req, res) => {
  dataHandler.postData(req.query)
    .then( (result) => res.send(result) )
    .catch( (error) => res.status(500).send(error) );
});

app.delete("/drax", (req, res) => {
  dataHandler.deleteData(req.query)
    .then( (result) => res.send(result) )
    .catch( (error) => res.status(500).send(error) );
});

app.put("/drax", (req, res) => {
  dataHandler.putData(req.query)
    .then( (result) => res.send(result) )
    .catch( (error) => res.status(500).send(error) );
});


module.exports = app;