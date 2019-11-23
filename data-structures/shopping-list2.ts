'use strict';

/*
    Represent the following products with their prices
    Product 	Amount
    Milk 	1.07
    Rice 	1.59
    Eggs 	3.14
    Cheese 	12.60
    Chicken Breasts 	9.40
    Apples 	2.31
    Tomato 	2.58
    Potato 	1.75
    Onion 	1.10

    Represent Bob's shopping list
    Product 	Amount
    Milk 	3
    Rice 	2
    Eggs 	2
    Cheese 	1
    Chicken Breasts 	4
    Apples 	1
    Tomato 	2
    Potato 	1

    Represent Alice's shopping list
    Product 	Amount
    Rice 	1
    Eggs 	5
    Chicken Breasts 	2
    Apples 	1
    Tomato 	10

    Create an application which solves the following problems.
        How much does Bob pay?
        How much does Alice pay?
        Who buys more Rice?
        Who buys more Potato?
        Who buys more different products?
        Who buys more products? (piece)
 */

const products: { [key: string]: number }= {
    "Milk": 	1.07,
    "Rice": 	1.59,
    "Eggs": 	3.14,
    "Cheese": 	12.60,
    "Chicken Breasts": 	9.40,
    "Apples": 	2.31,
    "Tomato": 	2.58,
    "Potato": 	1.75,
    "Onion": 	1.10,
}
const listAlice: { [key: string]: number }= {
    "Rice": 	1,
    "Eggs": 	5,
    "Chicken Breasts": 	2,
    "Apples": 	1,
    "Tomato": 	10
}
const listBob: { [key: string]: number }= {
    "Milk": 	3,
    "Rice": 	2,
    "Eggs": 	2,
    "Cheese": 	1,
    "Chicken Breasts": 	4,
    "Apples": 	1,
    "Tomato": 	2,
    "Potato": 	1
}

function howMuch( list: { [key: string]: number }, products: { [key: string]: number } ): number {
    let sum: number= 0;
    for (const item in list) {
        sum+= list[item] * products[item];
    }
    return sum;
}

console.log(howMuch(listBob,products));
console.log(howMuch(listAlice,products));

console.log(Object.keys(listBob).reduce( (acc,item) => acc + listBob[item] * products[item], 0 ));
console.log(Object.keys(listAlice).reduce( (acc,item) => acc + listAlice[item] * products[item], 0 ));

console.log(`${ (listAlice["Rice"] > listBob["Rice]"]) ? "Alice" : "Bob"  } buys more Rice.`);
console.log(`${ (listAlice["Potato"] > listBob["Potato]"]) ? "Alice" : "Bob"  } buys more Potato.`);

console.log(`${ (Object.keys(listAlice).length > Object.keys(listBob).length) ? "Alice" : "Bob"  } buys more different products.`);
console.log(`${ ( Object.values(listAlice).reduce((acc,x)=>acc+x) > Object.values(listBob).reduce((acc,x)=>acc+x) ) ? "Alice" : "Bob"  } buys a higher amount of products.`);


export{};