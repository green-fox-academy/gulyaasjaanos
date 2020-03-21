"use strict";

const section = document.querySelector("section");
let divArray = [];
for (let i = 1; i < 101; i++) {
    let div = document.createElement("div");
    div.innerHTML = i;
    divArray.push(div);
}
section.append(...divArray);