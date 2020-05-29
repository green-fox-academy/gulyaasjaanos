"use strict";

let BASKET = JSON.parse(localStorage.getItem("basket")) || {};
const $toShop = document.querySelector("h3");
const $main = document.querySelector("main");
const $total = document.querySelector(".total");
const $order = document.querySelector("button");
let DB = {};
console.log(BASKET);

const getDB = async () => {
    const response = await fetch("http://localhost:8000/wares", {
            method: "GEt",
            headers: {
                "Content-Type" : "application/json",
            }});
    const json = await response.json();
    let DB = {}
    json.forEach( e => {
        DB[e.id] = {};
        DB[e.id].stock = e.stock;
        DB[e.id].price = e.price;
    });
    return DB;
}

$toShop.addEventListener("click", (event) => {
    localStorage.setItem("basket", JSON.stringify(BASKET));
    window.location.href = "http://localhost:8000/html/shop.html";
});

const sumTotal = () => {
    const basket = Object.keys(BASKET).map( e => BASKET[e] );
    return basket.reduce( (a,e) => a + e.db * DB[e.id].price ,0 ).toFixed(2);
};

const renderWares = () => {
    const basket = Object.keys(BASKET).map( e => BASKET[e] );
    let articleArray = [];
    basket.forEach( e => {
        const $article = document.createElement("article");
        $article.innerHTML = `
            <div class="ware" data-id="${e.id}">${e.ware}</div>
            <div class="price" data-id="${e.id}">${DB[e.id].price}</div>
            <div class="less" data-id="${e.id}">-</div>
            <div class="db" data-id="${e.id}">${e.db}</div>
            <div class="more" data-id="${e.id}">+</div>
            <div class="sum" data-id="${e.id}">${(e.db * e.price).toFixed(2)}</div>
        `;
        articleArray.push($article);
    })
    $main.append(...articleArray);
    $total.innerHTML = `Grand total: ${sumTotal()}`;
};

$main.addEventListener("click", (event) => {
    if (event.target.className === "less" || event.target.className === "more") {
        const id = event.target.dataset.id;
        if (event.target.className === "less") --BASKET[id].db;
        if (event.target.className === "more") ++BASKET[id].db;
        BASKET[id].db = (BASKET[id].db < 0) ? 0 : BASKET[id].db;
        BASKET[id].db = (BASKET[id].db > DB[id].stock) ? DB[id].stock : BASKET[id].db;
        document.querySelector(`.db[data-id="${id}"`).innerHTML = BASKET[id].db;
        document.querySelector(`.sum[data-id="${id}"`).innerHTML = (BASKET[id].db * DB[id].price).toFixed(2);
        $total.innerHTML = `Grand total: ${sumTotal()}`;
    }
});

$order.addEventListener("click", (event) => {
    fetch("http://localhost:8000/order", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(BASKET)
    })
    .then( response => response.json() )
    .then( json => {
        window.location.href = `http://localhost:8000/html/order.html?orderid=${json.orderId}`;
    } )
    .catch( (error) => console.error('Error:', error) );
});


getDB()
.then( response => {
        DB = response;
        renderWares();
    }  
);

