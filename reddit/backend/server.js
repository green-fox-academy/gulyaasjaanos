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

app.get("/posts", (req,res) => {
  sqlconn.readPosts( (posts) => {
    let response = { posts: []};
    for (const post of posts) {
      let entry = {};
      for (let [key, value] of Object.entries(post)) {
        entry[key] = value;
      }
      response.posts.push(entry);
    };
    res.send(response);
  });
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
    toRecord.owner = req.headers.username;
    toRecord.timestamp = timestamp;
    res.send(toRecord);
  });
});

app.put("/posts/:param/upvote", (req,res) => {
  const regex = /^[1-9]{1,}$/i;
  if ( regex.test(req.params.param) ) {
    let response = {
      success: req.params.param
    }
    sqlconn.modifyPost(req.params.param, {score: 1}, (rows) => {
      res.send(rows);
    });
  } else {
    res.send({
      error: "What id would you like to upvote?"
    });
  }
});

app.put("/posts/:param/downvote", (req,res) => {
  const regex = /^[1-9]{1,}$/i;
  if ( regex.test(req.params.param) ) {
    let response = {
      success: req.params.param
    }
    sqlconn.modifyPost(req.params.param, {score: -1}, (rows) => {
      res.send(rows);
    });
  } else {
    res.send({
      error: "What id would you like to downvote?"
    });
  }
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