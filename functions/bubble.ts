"use strict";
//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(tosort:number[],desc:boolean) {
    let sorted:number[]= tosort.sort(function(a,b) {
        return a - b;
    });
    if (desc) {
        sorted.reverse();
    }
    return sorted;
}

function mySort(list: number[]) {
    let unsorted: boolean= true;
    let puffer: number= -1;
    do {
        unsorted= false;
        for (let i= 0; i < list.length - 1; i++) {
            if ( list[i] > list[i+1] ) {
                puffer= list[i];
                list[i]= list[i+1];
                list[i+1]= puffer;
                unsorted= true;
            }
        }
    }
    while (unsorted);
    return list;
}

function myReverse(list: number[]) {
    let i= 0;
    let puffer: number= -1;
    while ( i !== list.length -1 -i && i !== list.length -i ) {
        puffer= list[i];
        list[i]= list[list.length -1 - i];
        list[list.length -1 - i]= puffer;
        i++;
    }
    return list;
}

function myBubble(tosort:number[],desc:boolean) {
    let sorted:number[]= mySort(tosort);
    if (desc) {
        myReverse(sorted);
    }
    return sorted;
}


console.log(bubble([34, 12, 24, 9, 5], true));
console.log(myBubble([34, 12, 24, 9, 5], true));


export{};