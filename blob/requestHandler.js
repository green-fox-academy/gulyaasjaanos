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
    return new Promise( (resolve, reject) => {
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
        "secretCode": Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10)
    };
    let inUse = false;
    for (let item of database) {
        if( item.alias === dbItem.alias) {
            inUse = true;
        }
    }
    return new Promise( (resolve, reject) => {
        if( inUse ) {
            reject("alias is already in use");
        } else {
            idCounter++;
            dbItem.id = idCounter;
            database.push(dbItem);
            resolve(dbItem);
        }
    });
        
};

module.exports = {
    getLinks,
    postLink
};