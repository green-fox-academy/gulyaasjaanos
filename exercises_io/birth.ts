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

const birthdata = birthyear(source);
const maxbirth: number= Math.max(...Object.values(birthdata));
const maxbirthYears: string = Object.keys(birthdata).filter( (e) => birthdata[e] === maxbirth ).join(",");
console.log(`These years had the most births: ${maxbirthYears}`);

export{};