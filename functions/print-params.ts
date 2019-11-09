"use strict";
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(first:any,...restparams){
    let params:string= first;
    restparams.forEach(function(e) {
        params+= "," + e;
    });
    return params;
}

console.log(printParams(1,2,"kiwi"));

export{};