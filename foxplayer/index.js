"use strict";

const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const mp3List = require("./fileReader");
const sql = require("./sqlHandler")

app.use(express.static("frontend"));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/./frontend/html/index.html'));
});

app.get("/alltrack", (req,res) => {
    mp3List.dirMp3(__dirname)
    .then( (response) => res.send(response) )
    .catch( (error) => res.status(500).send(error) );
});

app.get("/playlists", (req,res) => {
    sql.getPlaylists()
    .then( (response) => res.send(response) )
    .catch( (error) => res.status(500).send(error) );
});

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
});