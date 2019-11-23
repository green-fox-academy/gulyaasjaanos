'use strict';

/*
    Create a map with the following key-value pairs.
    Product name (key) 	Price (value)
    Eggs 	200
    Milk 	200
    Fish 	400
    Apples 	150
    Bread 	50
    Chicken 	550

    Create an application which solves the following problems.
        Which products cost less than 201? (just the name)
        Which products cost more than 150? (name + price)
 */

const products: { [key: string]: number; }= {
    "Eggs": 	200,
    "Milk": 	200,
    "Fish": 	400,
    "Apples": 	150,
    "Bread": 	50,
    "Chicken": 	550
}

for (const key in products) {
    if ( products[key] < 201) {
        console.log(key);
    }
}
for (const key in products) {
    if ( products[key] > 150) {
        console.log(`${key} : ${products[key]}`);
    }
}

export{};