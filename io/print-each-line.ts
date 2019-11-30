// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';

import { fileURLToPath } from "url";

const fs = require('fs');

function readFile(file :string) {
    let content = fs.readFileSync(file, 'utf-8');
    return content;
}

let file :string= "my-file.txt";
try {
    console.log(readFile(file));
    file= "my-file2.txt";
    console.log(readFile(file));
}
catch(error) {
    console.log(`Unable to read file: ${file}`);
    console.log(error.message);
}


export{};