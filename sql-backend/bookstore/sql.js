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
    conn.query("SELECT book_name FROM book_mast;", (err, rows) => {
        if (err) {
          console.error(`Cannot retrieve data: ${err.toString()}`);
          res.sendStatus(500);
          callBack(null);
        }
        callBack(rows);
    });
}

const tableBooks = (search,callBack) => {
    let query = "SELECT * FROM books WHERE 1=1";
    let params = [];
    query += (search.category)? " AND category=?" : " AND 1=?";
    params.push( (search.category)? search.category : 1 );
    query += (search.author)? " AND author like ?" : " AND 1=?";
    params.push( (search.author)? "%"+search.author+"%" : 1 );
    query += (search.publisher)? " AND publisher like ?" : " AND 1=?";
    params.push( (search.publisher)? "%"+search.publisher+"%" : 1 );
    query += (search.plt)? " AND price < ?" : " AND 1=?";
    params.push( (search.plt)? search.plt : 1 );
    query += (search.pgt)? " AND price > ?" : " AND 1=?";
    params.push( (search.pgt)? search.pgt : 1 );
    conn.query(query, params, (err, rows) => {
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
    listBooks,
    tableBooks
};