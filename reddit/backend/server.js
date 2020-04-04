"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const sqlconn = require("./sql");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req,res) => {
  res.send("working");
});


app.post("/posts", (req,res) => {
  const date = properDate(new Date);
  const timestamp = Math.floor(Date.now() / 1000);
  const toRecord = {
    id: 0,
    title: req.body.title,
    url: req.body.url,
    timestamp: date,
    score: 0,
    owner: req.headers.username,
    vote: 0
  };
  sqlconn.createPost(toRecord, (id) => {
    toRecord.id = id;
    toRecord.timestamp = timestamp;
    console.log(toRecord);
    res.send("posted");
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


function properDate(d) {
  const date = d.getFullYear()+"-"+
               (d.getMonth()*1+1)+"-"+
               d.getDate()+" "+
               d.getHours()+":"+
               d.getMinutes()+":"+
               d.getSeconds();
  return date;
}