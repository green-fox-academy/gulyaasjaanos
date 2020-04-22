"use strict";

const all = (promises) => {
    return new Promise ( (resolve,reject) => {
        try {
            let out = [];
            let count = 0;
            promises.forEach ( (e,i) => {
                e.then( (v) => {
                    count++;
                    out[i] = v;
                    if (count === promises.length) {
                        resolve(out);
                    }
                })
            });
        } catch(e) {
            reject(e);
        }
    });
};

all([getPromise1(),getPromise2()])
    .then(console.log);