"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const forecasts = require("./js/forecasts");

app.set("view engine", "ejs");

app.use("/asset", express.static("asset"));
app.use("/css", express.static("css"));


function whichCity(city) {
    if (city === "first") {
        return 0;
    }
    let element = {};
    forecasts.forEach( e => {
        if (e.city === city) {
            element = e;
        }
    });
    return element;
}

app.get("/", (req,res) => {
    res.render("dashboard.ejs", {
        forecasts: forecasts
    });
});

app.get("/cities", (req,res) => {
    const {city="first"} = req.query;
    res.render("cities.ejs", {
        forecast: whichCity(city)
    });
});


app.listen(PORT, () => {
    console.log("listening on 3000");
})