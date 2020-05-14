"use strict";

const sql = require("mysql");

const conn = sql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "urlshredder"
});

conn.connect((err) => {
  if (err) {
    console.error("Cannot connect to the database", err);
    return;
  }
  console.log("Connection established");
});

const getLinks = () => {

};

const postLink = (url,alias) => {
    
};

const getALink = (alias) => {
    return new Promise( (resolve, reject) => {
        conn.query('SELECT url FROM url WHERE alias = ?', [alias], (error, results) => {
            console.log(results);
            if (error) {
                reject(400)
            } else if (results.length === 0) {
                reject(404)
            } else {
                resolve(results[0].url);
            }
        });
    });   
};

const deleteALink = (id,secretCode) => {
 
};

module.exports = {
    getLinks,
    postLink,
    getALink,
    deleteALink
};