'use strict';

const fs = require('fs');

function fileArray(source :string):string[][] {
    let content = [];
    content.push([]);
    try {
        const LBREAK = "\r\n";
        const TAB = "   ";
        content = fs.readFileSync(source, "utf-8").split(LBREAK).map( e =>  e.replace(" /","").split(TAB) );
        return content;
    }
    catch(error) {
        return content;
    }
}

const FILE: string = "log.txt";
let source: string[][]= fileArray(FILE);

const ips = (source: string[][]) => {
    return source.reduce( (ip,e) => {
        if (ip.indexOf(e[1]) === -1) ip.push(e[1]);
        return ip;
    },[] ).length;
}
const method = (source: string[][]) => {
    return source.reduce( (method,e) => {
        if (e[2] in method) {
            method[e[2]]++;
        } else {
            method[e[2]] = 1;
        };
        return method;
    },{} );
}

console.log (`Number of unique IP addresses: ${ips(source)}`);
console.log (`GET / POST ratio: ${method(source)["GET"]} / ${method(source)["POST"]}`);

export{};