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

const FILE: string = "lottery.csv";
let source: string[][]= fileArray(FILE);
let numbers: string[]= source.map( (e) => e[e.length-5]+","+e[e.length-4]+","+e[e.length-3]+","+e[e.length-2]+","+e[e.length-1] ).join(",").split(",");

const lottery = (source: string[]):{ [key: string] :number } => {
    return source.reduce( (number,e) => {
        if (e in number) number[e]++;
        else number[e] = 1;
        return number;
    },{} );
}

const sorted = (source: { [key: string] :number }):string[] => {
    return Object.keys(source).sort( (a,b) => lottery_numbers[b] - lottery_numbers[a] );
}

const lottery_numbers = lottery(numbers);
let top5 = sorted(lottery_numbers);
top5.length = 5;
console.log(`Most common lottery numbers: ${top5.join(",")}`);

export{};