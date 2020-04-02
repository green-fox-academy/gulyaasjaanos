"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const ejs = require("ejs");
const sqlconn = require("./sql");


app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", (req,res) => {
  sqlconn.listBooks( (rows) => {
    res.render("index.ejs", {rows});
  })
});

app.get("/books", (req,res) => {
  let params = "";
  for (const param in req.query) {
    params += `${param}: ${req.query[param]}; `
  }
  const search = {search: `Searching paramaters are: ${params}`};
  sqlconn.tableBooks( req.query, (rows) => {
    res.render("books.ejs", {search,rows});
  })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});