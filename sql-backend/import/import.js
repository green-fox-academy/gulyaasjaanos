"use strict";

const sqlconn = require("./sql");
const fs = require("fs");

function importData(file,write){
    try {
        let content = fs.readFileSync(file, "utf-8");
        let data = content.split("\r\n").map( (e) => e.split(",") );
        write(data);
    }
    catch(error) {
        let data = [];
        write(data);
    }
    
}

function dataWrite(data){
    sqlconn.writeData( data, (success) => {
        console.log(success);
        sqlconn.conn.end();
    });
};

let file = "./data/users.csv";

importData(file, (data) => {
    dataWrite(data);
});