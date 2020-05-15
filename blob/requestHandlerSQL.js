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
    return new Promise( (resolve, reject) => {
        conn.query('SELECT id,url,alias,hitcount FROM url', (error, results) => {
            if (error) {
                reject(400);
            } else {
                resolve(results);
            }
        });
    });
};

const postLink = async (url,alias) => {
    return new Promise( (resolve, reject) => {
        const secret = Math.floor(Math.random()*10).toFixed(0) + Math.floor(Math.random()*10).toFixed(0) + Math.floor(Math.random()*10).toFixed(0) + Math.floor(Math.random()*10).toFixed(0);
        conn.query('INSERT INTO url (url,alias,hitcount,secretcode) VALUES (?,?,?,?); ', [url,alias,0,secret], (error, results) => {
            if (error) {
                reject(400)
            } else if (results.affectedRows === 0) {
                reject(400)
            } else {
                resolve({
                        "id": results.insertId,
                        "url": url,
                        "alias": alias,
                        "hitCount": 0,
                        "secretCode": secret
                });
            }
        });
    });
};

const deleteALink = async (id,secretCode) => {
    return new Promise( (resolve, reject) => {
        conn.query('DELETE FROM url WHERE id = ? AND secretcode = ?;', [id,secretCode], (error, results) => {
            if (error) {
                reject(400)
            } else if (results.length === 0) {
                reject(404)
            } else {
                resolve(204);
            }
        });
    });
};

const getALink = (alias) => {
    return new Promise( (resolve, reject) => {
        conn.query('SELECT url,id,hitcount FROM url WHERE alias = ?', [alias], (error, results) => {
            if (error) {
                reject(400)
            } else if (results.length === 0) {
                reject(404)
            } else {
                putHitCount(results[0].id,results[0].hitcount+1);
                resolve(results[0].url);
            }
        });
    });   
};

const putHitCount = (id,hit) => {
    return new Promise( (resolve, reject) => {
        conn.query('UPDATE url SET hitcount = ? WHERE id = ?', [hit,id], (error, results) => {
            if (error) {
                reject(400)
            } else {
                resolve(204);
            }
        });
    });   
};

module.exports = {
    getLinks,
    postLink,
    getALink,
    deleteALink
};