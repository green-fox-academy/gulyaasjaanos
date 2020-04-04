"use strict";
const sql = require("mysql");

const conn = sql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "reddit"
});

conn.connect((err) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
  //conn.end();
});

const createUser = (name, callBack) => {
  let query = "INSERT INTO users (name) VALUES (?)";
  let params = [name];
  conn.query(query, params, (err, res) => {
    if (err) {
      console.error(`Cannot write data: ${err.toString()}`);
      res.sendStatus(500);
      callBack(null);
    }
    callBack(res.insertId);
  });
};

const findUser = (name, callBack) => {
    let query = "SELECT * FROM users WHERE name=?";
    let params = [name];
    conn.query(query, params, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        callBack(null);
      }
      if (rows.length === 0) {
        createUser(name, (id) => {
          callBack(id);
        });
      } else {
        callBack(rows[0].id);
      }
    });
};

const createPost = (record, callBack) => {
  findUser(record.owner, (id) => {
    let query = "INSERT INTO posts (title,url,timestamp,score,owner_id,vote) VALUES (?,?,?,?,?,?)";
    record.owner = id;
    let params = Object.values(record);
    params.shift();
    conn.query(query, params, (err, res) => {
      if (err) {
        console.error(`Cannot write data: ${err.toString()}`);
        res.sendStatus(500);
        callBack(null);
      }
      callBack(res.insertId);
    });
  });
}

const readPosts = (callBack) => {
    let query = "SELECT * FROM posts";
    conn.query(query, (err, rows) => {
      if (err) {
        console.error(`Cannot write data: ${err.toString()}`);
        res.sendStatus(500);
        callBack(null);
      }
      callBack(rows);
    });
}

module.exports = {
    conn,
    createPost,
    readPosts
};