"uses strict";

const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use( cors() );
app.use( bodyParser.json() );


app.post("/signup/", (req,res) => {
    res.send(
        {   message: `Thanks ${req.body.username}, we will send updates to ${req.body.email}`    }
        );
});

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});