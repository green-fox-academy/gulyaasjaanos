"use strict";
const sql = require("mysql");

const conn = sql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "bookinfo"
});

conn.connect((err) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
  //conn.end();
});


const listBooks = (callBack) => {
    conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
        if (err) {
          console.error(`Cannot retrieve data: ${err.toString()}`);
          res.sendStatus(500);
          callBack(null);
        }
        callBack(rows);
    });
} 

module.exports = {
    conn,
    listBooks
};