'use strict';

/*Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name

William
John
Amanda

Iterate through the list and print

1. William
2. John
3. Amanda

Remove the 2nd element
Iterate through the list in a reversed order and print out each name

Amanda
William

Remove all elements*/

const list:string[]= [];
console.log(list);
list.push("William");
console.log(list.length === 0);
list.push("John");
list.push("Amanda");
console.log(list.length);
console.log(list[2]);
list.forEach((e) => console.log(e));
list.forEach((e,i) => console.log(i+1+". "+e));
list.splice(1,1);
list.reverse().forEach((e) => console.log(e));
//list= [];
list.length= 0;

export {};