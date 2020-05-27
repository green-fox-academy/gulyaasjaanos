"use strict";

const mysql = require("mysql");
const conn = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user     : "root",
    database : "todo"
  });

conn.connect( (error) => {
    if (error) {
        console.error("cannot connect to database", error);
        return;
    } else {
        console.log("connection established");
    }
})

const getTasks = () => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "SELECT * FROM tasks",
            [],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results);   
            }
        );
    });
};

const getSingleTask = (id) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "SELECT * FROM tasks WHERE id=?",
            [id],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results[0]);   
            }
        );
    });
};

const postTask = (task,description,urgency) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "INSERT INTO tasks (task,description,urgency) VALUES(?,?,?)",
            [task,description,urgency],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results.insertId);   
            }
        );
    });
};

const modifyTask = (task,description,urgency,id) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "UPDATE tasks SET task=?,description=?,urgency=? WHERE id=?",
            [task,description,urgency,id],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results.affectedRows);   
            }
        );
    });
};

const modifyStatus = (status,id) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "UPDATE tasks SET status=? WHERE id=?",
            [status,id],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results.affectedRows);   
            }
        );
    });
};

const deleteTask = (id) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "DELETE FROM tasks WHERE id=?",
            [id],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results.affectedRows);   
            }
        );
    });
};

module.exports = {
    getTasks,
    postTask,
    modifyTask,
    deleteTask,
    getSingleTask,
    modifyStatus
}