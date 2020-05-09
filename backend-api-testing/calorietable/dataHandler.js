"use strict";

let table = {
    "Full-fat milk": {quantity: "1 cup", amount: 150},
    "Low fat milk (1%)": {quantity: "1 cup", amount: 102},
    "Cow's milk": {quantity: "1 cup", amount: 157},
    "Goat milk": {quantity: "1 cup", amount: 264}
  };

const getData = () => {
    let output = [];
    for (let food in table) {
        output.push(`${food} : ${table[food]["quantity"]} : ${table[food]["amount"]}`);
    }
    output = output.join("\n");
    return new Promise( (resolve, reject) => {
        resolve(output);
    });
};

const postData = ({food,quantity,amount}) => {
    return new Promise( (resolve, reject) => {
        if (food && quantity && amount) {
            if (table[food]) {
                reject("Food already in table. Use put for changing amount.");
            } else {
                table[food] = {quantity, amount};
                resolve({food: food, values: table[food]});
            }
        } else {
            reject("Provide data please!");
        } 
    });
};

const putData = ({food,quantity,amount}) => {
    return new Promise( (resolve, reject) => {
        if (food) {
            if (table[food]) {
                table[food] = {quantity, amount};
                resolve({food: food, values: table[food]});
            } else {
                reject("No such food.");
            }
        } else {
            reject("Provide data please!");
        } 
    });
};

const deleteData = ({food}) => {
    return new Promise( (resolve, reject) => {
        if (food) {
            if (table[food]) {
                delete table[food];
                resolve("Food deleted.");
            } else {
                reject("No such food.");
            }
        } else {
            reject("Provide data please!");
        } 
    });
};

module.exports = {
    getData,
    postData,
    deleteData,
    putData
}