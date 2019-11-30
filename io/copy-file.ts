// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';

const fs = require('fs');

function copyFile(source :string, target :string):boolean {
    try {
        let content = fs.readFileSync(source, 'utf-8');
        fs.writeFileSync(target, content);
        return true;
    }
    catch(error) {
        return false;
    }
    
}

let source :string= "../io/my-file3.txt";
let target :string= "../io/my-file3_copy.txt";
console.log(`Succeed in copy: ${copyFile(source,target)}`);


export{};