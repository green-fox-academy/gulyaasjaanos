"use script";
let array: number[]= [1,2,3];

function myForEach(array: any, func: Function) {
    for (let i= 0; i < array.length; i++) {
        func(array[i], i, array);
    }
}

function myMap(array: any, func: Function) {
    let output:any[]= [];
    for (let i= 0; i < array.length; i++) {
        output.push(func(array[i]));
    }
    return output;
}

function myConcat(array1: any[], array2: any[]) {
    let output:any[]= [];
    for (let i= 0; i < array1.length; i++) {
        output.push(array1[i]);
    }
    for (let i= 0; i < array2.length; i++) {
        output.push(array2[i]);
    }
    return output;
}

function myShift(array: any[]) {
    let output:any[]= array[0];
    for (let i= 0; i < array.length; i++) {
       array[i]= array[i+1];
    }
    array.length= array.length-1;
    return output;
}



myForEach([1,2,3], function(e: any,i: number,arr: any[]) {
    console.log(`${i}.: ${e}`);
});

console.log(myMap([1,2,3],function(num: number) {
    return num * 2;
}));

console.log(myConcat([1,2,3],[4,"five",6]));

let array_shift: number[]= [1,2,3];
console.log(myShift(array_shift));
console.log(array_shift);