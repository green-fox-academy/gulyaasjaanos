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

const getPosts = (user) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            'SELECT v.id,v.title,v.url,v.timestamp,v.score,v.owner,ifnull(voter_view.vote,0) vote FROM posts_view AS v LEFT JOIN voter_view ON voter_view.owner = ? AND v.id = voter_view.post_id'
            , [user], (error, results) => {
            if (error) {
                reject(400);
            } else {
                resolve(results);
            }
        });
    });
};

const putVote = (user,post_id,vote) => {
    return new Promise( async (resolve, reject) => {
        const user_id = await getUserId(user)
            .then( (result) => result.id )
            .catch( (error) => reject(error) );
        const score = await getSinglePost(user,post_id)
            .then( (result) => result.score )
            .catch( (error) => reject(error) );
        await postVote(post_id,user_id,vote)
            .then( (result) => result )
            .catch( (error) => reject(error) );
        await updateVote(post_id,score+vote)
            .then( (result) => result )
            .catch( (error) => reject(error) );
        getSinglePost(user,post_id)
            .then( (result) => resolve(result) )
            .catch( (error) => reject(error) );
    });
};


const updateVote = (id,newscore) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            'UPDATE posts SET score = ? WHERE id = ?;'
            , [newscore, id], (error, results) => {
            if (error) {
                reject(403);
            } else {
                resolve(200);
            }
        });
    });
};

const postVote = (post_id,owner_id,vote) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            'INSERT INTO post_voter (post_id, owner_id, vote) VALUES (?, ?, ?);'
            , [post_id,owner_id,vote], (error, results) => {
            if (error) {
                reject(402);
            } else {
                resolve(200);
            }
        });
    });
};

const getUserId = (user) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            'SELECT id FROM owner WHERE owner = ?'
            , [user], (error, results) => {
            if (error) {
                reject(400);
            } else {
                resolve(results[0]);
            }
        });
    });
}

const getSinglePost = (user,id) => {
    return new Promise( (resolve, reject) => {
        conn.query(
            'SELECT v.id,v.title,v.url,v.timestamp,v.score,v.owner,ifnull(voter_view.vote,0) vote FROM posts_view AS v LEFT JOIN voter_view ON voter_view.owner = ? AND v.id = voter_view.post_id WHERE v.id = ?'
            , [user,id], (error, results) => {
            if (error) {
                reject(401);
            } else {
                resolve(results[0]);
            }
        });
    });
};

module.exports = {
    getPosts,
    putVote
}