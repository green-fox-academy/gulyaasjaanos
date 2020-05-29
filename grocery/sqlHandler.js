"use strict";

const mysql = require("mysql");
const conn = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user     : "root",
    database : "grocery"
  });

conn.connect( (error) => {
    if (error) {
        console.error("cannot connect to database", error);
        return;
    } else {
        console.log("connection established");
    }
})

const getWares = () => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "SELECT * FROM wares",
            [],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results);   
            }
        );
    });
};

const postOrderHeader = (code) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "INSERT INTO order_header (code) VALUES(?);",
            [code],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results.insertId);   
            }
        );
    });
};

const postOrderItem = (header_id,ware_id,amount,price,sum) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "INSERT INTO order_item (header_id,ware_id,amount,price,sum) VALUES(?,?,?,?,?);",
            [header_id,ware_id,amount,price,sum],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results);   
            }
        );
    });
};

const reduceStock = (ware_id,amount) => {
    return new Promise( (resolve,reject) => {
        conn.query(
            "UPDATE wares SET stock=? WHERE id=?",
            [amount,ware_id],
            (error,results) => {
                if (error) reject({"error": error});
                resolve(results);   
            }
        );
    });
};

const postOrder = async (code,BASKET) => {
    const wares = await getWares();
    const stock = {}
    wares.forEach( e => {
        stock[e.id] = {};
        stock[e.id].stock = e.stock;
        stock[e.id].price = e.price;
    })
    const header_id = await postOrderHeader(code);
    const basket = Object.keys(BASKET).map( e => BASKET[e] );
    await basket.forEach( e => {
        postOrderItem(header_id,e.id,e.db,stock[e.id].price,e.db*stock[e.id].price);
        reduceStock(e.id,stock[e.id].stock-e.db);
    })
    return {"orderId": code};
}


module.exports = {
    getWares,
    postOrder
}