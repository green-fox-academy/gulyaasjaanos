'use strict';

const fs = require('fs');

function decrypt(source :string, ):boolean {
    try {
        let content= fs.readFileSync(source, 'utf-8').split('\r\n').map( e => e.split('').reverse().join('') + "\r\n" ).join('');
        let target: string= source.replace(".","_reversed.");
        fs.writeFileSync(target, content);
        return true;
    }
    catch(error) {
        return false;
    }
    
}

let source :string= "reversed-lines.txt";
console.log(`Reverse was successful: ${decrypt(source)}`)

export{};