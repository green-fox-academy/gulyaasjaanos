'use strict';

const fs = require('fs');

function matchSTR(source :string):string{
    try {
        const LBREAK = "\r\n";
        return fs.readFileSync(source, "utf-8").split(LBREAK).join("").toLowerCase();
    }
    catch(error) {
        return "";
    }
}

const draw: string[] = [
    "oxoxoxxox",
    "xoxxoxoxo",
    "xxoooxxxo",
    "oxxxoooxx",
    "xoxoxooxo",
    "oxooxoxox",
    "ooxxxooox",
    "xoooxxxoo"
]

function match(matchstring: string):string {
    if (draw.indexOf(matchstring) > -1) {
        return "Draw";
    } else if ( matchstring.split("").filter( e => e === "x" ).length > matchstring.split("").filter( e => e === "o" ).length ) {
        return "X";
    }
    return "O";
}

console.log(match(matchSTR("draw.txt")));
console.log(match(matchSTR("win-o.txt")));
console.log(match(matchSTR("win-x.txt")));



export{};