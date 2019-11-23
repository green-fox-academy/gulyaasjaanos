'use strict';

/*
    Create a list with the following items.
        Eggs, milk, fish, apples, bread and chicken
    Create an application which solves the following problems.
        Do we have milk on the list?
        Do we have bananas on the list? */

const shopping: string[]= ["eggs", "milk", "fish", "apples", "bread", "chicken"];

function weHave(item: string) {
    return (shopping.includes(item)) ? `We have ${item} on the list.` : `No ${item} on the list.`
}

console.log(weHave("apples"));
console.log(weHave("banana"));


export{};