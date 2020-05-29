"use strict";

const $main = document.querySelector("main");
const $basket = document.querySelector("nav i");
let BASKET = JSON.parse(localStorage.getItem("basket")) || {}

fetch("http://localhost:8000/wares", {
        method: "GEt",
        headers: {
            "Content-Type" : "application/json",
        }})
    .then( response => response.json() )
    .then( (results) => {
        renderWares(results);
    })
    .catch( (error) => console.error('Error:', error) );

const renderWares = (wares) => {
    let articleArray = [];
    wares.forEach( e => {
        const $article = document.createElement("article");
        const selected = (Object.keys(BASKET).includes(e.id+"")) ? 1 : 0
        $article.innerHTML = `
            <div class="ware" data-ware="${e.ware}"></div>
            <div class="tag">
                <div class="price">${e.price}</div>
                <i class="fas fa-shopping-basket ${(selected ===1)?" inBasket":""}" data-id="${e.id}" data-ware="${e.ware}" data-price="${e.price}" data-selected="${selected}"></i>
            </div>
        `;
        articleArray.push($article);
    })
    $main.append(...articleArray);
};

$basket.addEventListener("click", (event) => {
    localStorage.setItem("basket", JSON.stringify(BASKET));
    window.location.href = "http://localhost:8000/html/basket.html";
});

$main.addEventListener("click", (event) => {
    if (event.target.dataset.id) {
        event.target.classList.toggle("inBasket");
        event.target.dataset.selected = (event.target.dataset.selected === "0") ? "1" : "0";
        if (event.target.dataset.selected === "1") {
            BASKET[event.target.dataset.id] = {};
            BASKET[event.target.dataset.id].id = event.target.dataset.id;
            BASKET[event.target.dataset.id].ware = event.target.dataset.ware;
            BASKET[event.target.dataset.id].price = event.target.dataset.price;
            BASKET[event.target.dataset.id].db = 1;
        } else {
            delete BASKET[event.target.dataset.id];
        }
    }
});


