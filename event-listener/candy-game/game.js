"use strict";

let candy = 0;
let lollypop = 3;
let coeff = 1;
let speed = Math.floor(lollypop / 10) * coeff;

const candyBtn = document.querySelector(".create-candies");
const lollypopBtn = document.querySelector(".buy-lollypops");
const machineBtn = document.querySelector(".candy-machine");

const candyDisp = document.querySelector(".candies");
const lollypopDisp = document.querySelector(".lollypops");
const speedDisp = document.querySelector(".speed");

const interval = setInterval( () => {
    candy+= speed;
    candyDisp.innerHTML = candy;
}, 1000);

candyBtn.addEventListener("click", () => {
    candy+=1;
    candyDisp.innerHTML = candy;
});

lollypopBtn.addEventListener("click", () => {
    if (candy >= 100) {
        candy -= 100;
        lollypop++;
        candyDisp.innerHTML = candy;
        let lollypops = "";
        for (let i = 0; i < lollypop; i++) {
            lollypops += "🍭";
        }
        lollypopDisp.innerHTML = lollypops;
        speed = Math.floor(lollypop / 10) * coeff;
        speedDisp.innerHTML = speed;
    }
});

machineBtn.addEventListener("click", () => {
    coeff*=10;
    speed = Math.floor(lollypop / 10) * coeff;
    speedDisp.innerHTML = speed;
});