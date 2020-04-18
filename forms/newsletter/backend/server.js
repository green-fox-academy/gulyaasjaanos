"uses strict";

const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use( cors() );
app.use( bodyParser.json() );


app.post("/", (req,res) => {
    console.log(req.body);
    res.send({ok: "ok"});
});

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});