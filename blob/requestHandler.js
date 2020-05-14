"use strict";

let idCounter = 1;
let database = [
    {
        "id": 0,
        "url": "http://reddit.com",
        "alias": "bye-bye-time",
        "hitCount": 0,
        "secretCode": "0483"
    },
    {
        "id": 1,
        "url": "http://youtube.com",
        "alias": "watch-videos",
        "hitCount": 4,
        "secretCode": "0484"
    }
]

const getLinks = () => {
    let db = database.map( (e) => {
        delete e.secretCode;
        return e;
    });
    return new Promise( (resolve) => {
        resolve(db);
    });
};

const postLink = (url,alias) => {
    let dbItem =
    {
        "id": 0,
        "url": url,
        "alias": alias,
        "hitCount": 0,
        "secretCode": Math.floor(Math.random()*10).toFixed(0) + Math.floor(Math.random()*10).toFixed(0) + Math.floor(Math.random()*10).toFixed(0) + Math.floor(Math.random()*10).toFixed(0)
    };
    let inUse = false;
    for (let item of database) {
        if( item.alias === dbItem.alias) {
            inUse = true;
        }
    }
    return new Promise( (resolve, reject) => {
        if( inUse ) {
            reject(400);
        } else {
            idCounter++;
            dbItem.id = idCounter;
            database.push(dbItem);
            resolve(dbItem);
        }
    });   
};

const getALink = (alias) => {
    let pos = 0;
    let index = -1;
    for (let item of database) {
        if ( item.alias === alias) {
            index = pos;
            database[index].hitCount++;
        }
        pos++;
    }
    return new Promise( (resolve, reject) => {
        if ( index === -1 ) {
            reject(404);
        } else {
            resolve(database[index].url);
        }
    });   
};

const deleteALink = (id,secretCode) => {
    let pos = 0;
    let index = -1;
    id = parseInt(id);
    for (let item of database) {
        if ( item.id === id ) {
            index = (item.secretCode === secretCode)? pos : -2;
        }
        pos++;
    }
    return new Promise( (resolve, reject) => {
        if ( index === -1 ) {
            reject(404);
        } else if ( index === -2 ) {
            reject(403);
        } else {
            database.splice(index, 1);
            resolve(204);
        }
    });   
};

module.exports = {
    getLinks,
    postLink,
    getALink,
    deleteALink
};