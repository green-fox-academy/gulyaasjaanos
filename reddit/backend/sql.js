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
};

const readPosts = (callBack) => {
    let query = "SELECT * FROM posts_view";
    conn.query(query, (err, rows) => {
      if (err) {
        console.error(`Cannot write data: ${err.toString()}`);
        res.sendStatus(500);
        callBack(null);
      }
      callBack(rows);
    });
};

const modifyVote = (id, voter, votes, callBack) => {
  findUser(voter, (voter_id) => {
      let query = "SELECT * FROM post_voter WHERE post_id=? AND voter_id=?";
      conn.query(query, [id,voter_id], (err, rows) => {
        if (err) {
          console.error(`Cannot retrieve data: ${err.toString()}`);
          res.sendStatus(500);
          callBack(null);
        } else if (rows.length !== 0) {
          callBack(0);
        } else {
          let query = "INSERT INTO post_voter (post_id,voter_id) VALUES(?,?)";
          conn.query(query, [id,voter_id], (err, rows) => {
            if (err) {
              console.error(`Cannot write data: ${err.toString()}`);
              res.sendStatus(500);
              callBack(null);
            }
            let query = "UPDATE posts SET vote=? WHERE id=?";
            conn.query(query, [votes+1,id], (err, rows) => {
              if (err) {
                console.error(`Cannot write data: ${err.toString()}`);
                res.sendStatus(500);
                callBack(null);
              }
              callBack(1);
            });
          });
        }
      });
  });
};


const modifyPost = (id, params, callBack) => {
  let query = "SELECT * FROM posts_view WHERE id=?";
  conn.query(query, [id], (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      callBack(null);
    }
    if (rows.length === 0) {
      callBack(rows);
    } else {
      let mod = rows[0];
      mod.score = (params.score)? mod.score + params.score : mod.score;
      mod.title = (params.title)? params.title : mod.title;
      let query = "UPDATE posts SET score=?, title=? WHERE id=?";
      conn.query(query, [mod.score,mod.title,mod.id], (err, rows) => {
        if (err) {
          console.error(`Cannot retrieve data: ${err.toString()}`);
          res.sendStatus(500);
          callBack(null);
        } else if (params.score) {
          modifyVote(id, params.voter, mod.vote, (vote) => {
            mod.vote += vote;
            callBack(mod);
          });
        } else {
          callBack(mod);
        }
      });
    }
  });
};

const deletePost = (id, callBack) => {
  let query = "SELECT * FROM posts_view WHERE id=?";
  conn.query(query, [id], (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      callBack(null);
    } if (rows.length === 0) {
      callBack(rows);
    } else {
      let query = "DELETE FROM posts WHERE id=?";
      conn.query(query, [id], (err, res) => {
        if (err) {
          console.error(`Cannot retrieve data: ${err.toString()}`);
          res.sendStatus(500);
          callBack(null);
        }
        callBack(rows);
      });
    }
  });
};

module.exports = {
    conn,
    createPost,
    readPosts,
    modifyPost,
    deletePost
};