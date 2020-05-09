"use strict";

const express = require("express");
const app = express();

app.get("/groot/", (req, res) => {
  if (req.query.message) {
    res.send({
      "received": req.query.message,
      "translated": "I am Groot!"
    });
  } else {
    res.status(400).send({
      "error": "I am Groot!"
    });
  }
});

module.exports = app;