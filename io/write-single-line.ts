// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strict';

const fs = require('fs');

function writeFile(file :string, line: string) {
    let content :string= fs.readFileSync(file, 'utf-8') + "\r\n" + line ;
    fs.writeFileSync(file, content);
}

let file :string= "my-file.txt";
try {
    writeFile(file,"Janoo");
}
catch(error) {
    console.log(`Unable to write file: ${file}`);
    console.log(error.message);
}


export{};