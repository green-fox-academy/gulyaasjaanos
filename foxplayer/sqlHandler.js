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

const postPlaylist = (title) => {
  return new Promise( (resolve, reject) => {
      conn.query(
          "INSERT INTO playlists (title,system) VALUES(?,0);"
          , [title], (error, results) => {
          if (error) {
              reject("cannot write that");
          } else {
              resolve(results.insertId);
          }
      });
  });
};

const deletePlaylist = (id) => {
  return new Promise( (resolve, reject) => {
      conn.query(
          "DELETE FROM playlists WHERE id=?;"
          , [id], (error, results) => {
          if (error) {
              reject("cannot delete that");
          } else {
              resolve();
          }
      });
  });
};

const postTrack = (id,file) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            "INSERT INTO playlist_track (playlist_id,track_file) VALUES(?,?);"
            , [id,file], (error, results) => {
            if (error) {
                reject("cannot write that");
            } else {
                resolve(results.insertId);
            }
        });
    });
  };

const deleteTrack = (id,file) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            "DELETE FROM playlist_track WHERE playlist_id=? AND track_file=?;"
            , [id,file], (error, results) => {
            if (error) {
                reject("cannot delete that");
            } else {
                resolve(results.affectedRows);
            }
        });
    });
  };

const listAllTracks = () => {
    return new Promise( (resolve, reject) => {
        conn.query(
            "SELECT playlist_id,track_file FROM playlist_track"
            , [], (error, results) => {
            if (error) {
                reject("cannot read that");
            } else {
                resolve(results);
            }
        });
    });
  };

const listTracks = (id) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            "SELECT playlist_id,track_file FROM playlist_track WHERE playlist_id=?"
            , [id], (error, results) => {
            if (error) {
                reject("cannot read that");
            } else {
                resolve(results);
            }
        });
    });
  };

module.exports = {
    getPlaylists,
    postPlaylist,
    deletePlaylist,
    postTrack,
    listAllTracks,
    listTracks,
    deleteTrack
}