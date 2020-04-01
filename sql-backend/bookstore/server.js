"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const ejs = require("ejs");
const sqlconn = require("./sql");


app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", (req,res) => {
  sqlconn.conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.render("index.ejs", {rows});
  });
});

app.get("/books", (req,res) => {
  sqlconn.listBooks( (rows) => {
    res.render("index.ejs", {rows});
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});