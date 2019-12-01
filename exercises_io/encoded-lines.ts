'use strict';

const fs = require('fs');

function decode(source :string):boolean {
    try {
        let content= fs.readFileSync(source, 'utf-8').split('').map( (e) => 
            (e === " " || e === "\n") ? e : String.fromCharCode(e.charCodeAt(0)-1) 
        ).join('');
        let target: string= source.replace(".","_decoded.");
        fs.writeFileSync(target, content);
        return true;
    }
    catch(error) {
        return false;
    }
    
}

let source :string= "encoded-lines.txt";
console.log(`Decoding was successful: ${decode(source)}`)

export{};