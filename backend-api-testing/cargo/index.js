"use strict";

const express = require("express");
const app = express();

let cargo = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": "empty",
  "ready": false
};
let actualCargo = 0;
const maxCargo = 12500;

app.get("/rocket", (req, res) => {
  res.send(cargo);
});

app.get("/rocket/fill", (req, res) => {
  if (req.query.caliber && req.query.amount) {
    actualCargo += parseInt(req.query.amount);
    cargo[whatCaliber(req.query.caliber)] += parseInt(req.query.amount);
    cargo.shipstatus = whatCargo(actualCargo/maxCargo);
    cargo.ready = (cargo.shipstatus === "full");
    res.send(
      {
        "received": req.query.caliber,
        "amount": req.query.amount,
        "shipstatus": cargo.shipstatus,
        "ready": cargo.ready
      }
    );
  } else {
    res.status(400).send({
      error: "Data please!"
    });
  }
});

const whatCargo = (cargo) => {
  if (cargo === 0) return "empty";
  if (cargo > 1) return "overloaded";
  if (cargo === 1) return "full";
  return Math.floor(cargo*100)+"%";
};

const whatCaliber = (caliber) => {
  if (caliber === ".25") return "caliber25";
  if (caliber === ".30") return "caliber30";
  if (caliber === ".50") return "caliber50";
  return "";
};


module.exports = app;