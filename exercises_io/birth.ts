'use strict';

const fs = require('fs');

function fileArray(source :string):string[][] {
    let content = [];
    content.push([]);
    try {
        const LBREAK = "\r\n";
        const TAB = ";";
        content = fs.readFileSync(source, "utf-8").split(LBREAK).map( e =>  e.replace(" /","").split(TAB) );

        return content;
    }
    catch(error) {
        return content;
    }
}

const FILE: string = "birth.csv";
let source: string[][]= fileArray(FILE);

const birthyear = (source: string[][]):{ [key: string] :number } => {
    return source.reduce( (year,e) => {
        let y = e[1].slice(0,4);
        if (y in year) {
            year[y]++;
        } else {
            year[y] = 1;
        };
        return year;
    },{} );
}

//console.log (`Number of unique IP addresses: ${ips(source)}`);
//console.log (`GET / POST ratio: ${method(source)["GET"]} / ${method(source)["POST"]}`);

const birthdata = birthyear(source);
const births: number[] = Object.values(birthdata); 
const maxbirth: number= Math.max(...births);
const maxbirthYears: string = Object.keys(birthdata).filter( (e) => birthdata[e] === maxbirth ).join(",");
console.log(`These years had the most births: ${maxbirthYears}`);

export{};