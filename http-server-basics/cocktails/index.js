"use strict";

const express = require("express");
const cocktails = require("./js/data");
const app = express();
const PORT = 3000;
const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];


function filterByIngredient(alcohol) {
    
    if (alcohol === "all") {
        return cocktails;
    }
    return cocktails.filter( e => e.contains.includes(alcohol) );

}


app.set("view engine", "ejs");

app.use("/static", express.static("static"));

app.get("/", (req,res) => {
    const {alcohol="all"} = req.query; 
    res.render("cocktails.ejs", {
        alcohols: alcoholList,
        cocktails: filterByIngredient(alcohol),
        selected: alcohol
    });
});


app.listen(PORT, () => {
    console.log("listening on 3000");
})
