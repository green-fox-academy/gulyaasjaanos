"use strict";

const parsePromised = (toParse) => {
    return new Promise( (resolve,reject) => {
        try {
            resolve(JSON.parse(toParse));
        } catch(e) {
            reject(e.message);
        }
    }); 
};

parsePromised(process.argv[2])
    .then(null, console.log);
