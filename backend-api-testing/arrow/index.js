"use strict";

const express = require("express");
const app = express();

app.get("/yondu", (req, res) => {
  if (req.query.distance && req.query.time) {
    const speed = (req.query.distance / req.query.time).toFixed(1);
    res.send({
      distance: req.query.distance,
      time: req.query.time,
      speed
    });
  } else {
    res.status(400).send({
      error: "Data please!"
    });
  }
});

module.exports = app;