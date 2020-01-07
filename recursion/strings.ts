"use strict"

function xToY(str:string) {
    if ( str.length === 1) {
        return ( str === "x" )? "y" : str;
    }
    return xToY(str.substr(0,str.length-1)) + (( str[str.length-1] === "x" )? "y" : str[str.length-1]);
}

console.log(xToY("Hello xorld!"));

export {};