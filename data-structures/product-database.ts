'use strict';

/*Create a map with the following key-value pairs.
Product name (key) 	Price (value)
Eggs 	200
Milk 	200
Fish 	400
Apples 	150
Bread 	50
Chicken 	550

Create an application which solves the following problems.
    How much is the fish?
    What is the most expensive product?
    What is the average price?
    How many products' price is below 300?
    Is there anything we can buy for exactly 125?
    What is the cheapest product? */

function pairMe(item: any, list: { [key: string]: number } ): string {
    for (const key in list) {
        if (list[key] == item) { return key.toString();
        } else if (key == item) { return list[key].toString(); }
    }
    return "no match";
}

const products: { [key: string]: number; }= {
    "Eggs": 	200,
    "Milk": 	200,
    "Fish": 	400,
    "Apples": 	150,
    "Bread": 	50,
    "Chicken": 	550
}

console.log(pairMe("Fish",products));
console.log(pairMe(Math.max(...Object.values(products)),products));
console.log(Math.round(Object.values(products).reduce((acc,x) => acc+x) / Object.values(products).length));
console.log(Object.values(products).filter(x => x < 300).length);
console.log(pairMe(125,products));
console.log(pairMe(Math.min(...Object.values(products)),products));