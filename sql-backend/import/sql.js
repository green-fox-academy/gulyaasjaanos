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


const writeData = (data,callBack) => {
  let query = 'INSERT INTO user (prefix,first_name,last_name,address,height,bitcoin_address,color_preference) VALUES (?,?,?,?,?,?,?)'
  let success = "";
  data.forEach( (row,index) => {
    if (index > 0) {
      let params = [row[1],row[2],row[3],row[4],row[5],row[6],row[7]];
      conn.query(query, params, (err, res) => {
        if (err) {
          callBack(`Cannot retrieve data: ${err.toString()}`);
        } else if (index === data.length-1) {
          callBack(success = `Successfully inserted ${res.insertId} rows.`);
        }
      });
    }
  });
}

module.exports = {
    conn,
    writeData
};