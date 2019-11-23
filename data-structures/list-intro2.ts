'use strict';

/*Create a list ('List A') which contains the following values

Apple, Avocado, Blueberries, Durian, Lychee

Create a new list ('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A*/

const listA: string[]= ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
const listB: string[]= [...listA];
console.log(listA.includes("Durian"));
listA.splice(3,1);
listA.splice(3,0,"Kiwifruit");
console.log(`${listA.length} (A) versus ${listA.length} (B)`);
console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));
//listB= [...listB,"Passion Fruit","Pomelo"];
listB.concat(["Passion Fruit","Pomelo"]);
console.log(listA[4]);

export {};
