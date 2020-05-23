"use strict";

const sql = require("mysql");

const conn = sql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "foxplayer"
});

conn.connect((err) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
});

const getPlaylists = () => {
    return new Promise( (resolve, reject) => {
        conn.query(
            "SELECT * FROM playlists"
            , [], (error, results) => {
            if (error) {
                reject("playlist data missing");
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    getPlaylists
}