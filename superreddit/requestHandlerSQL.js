"use strict";

const sql = require("mysql");

const conn = sql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "the_reddit"
});

conn.connect((err) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
});

const getPosts = () => {
    return new Promise( (resolve, reject) => {
        conn.query('SELECT * FROM posts_view', (error, results) => {
            if (error) {
                reject(400);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    getPosts
}