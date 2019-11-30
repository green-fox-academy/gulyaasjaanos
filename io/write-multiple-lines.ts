// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

'use strict';

const fs = require('fs');

function writeFile(path :string, line :string, n :number):boolean {
    try {
        let content :string= '';
        for (let i:number = 1; i <= n; i++) content+= line + "\r\n";
        fs.writeFileSync(file, content);
        return true;
    }
    catch(error) {
        return false;
    }
    
}

let file :string= "../io/my-file2.txt";
console.log(`Writing the file was successful: ${writeFile(file,"apple",6)}`);


export{};