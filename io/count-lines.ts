// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

const fs = require('fs');

function fileLineCount(file :string):number {
    try {
        let content = fs.readFileSync(file, 'utf-8');
        return content.split("\r\n").length;
    }
    catch(error) {
        return 0;
    }
    
}

let file :string= "my-file.txt";
console.log(fileLineCount(file));



export{};