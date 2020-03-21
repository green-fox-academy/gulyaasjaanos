"use strict";

let alpha = Math.random()*360;
let speed = 5;
const ball = document.getElementById("ball");
const maxX = document.getElementsByTagName("body")[0].offsetWidth;
const maxY = document.getElementsByTagName("body")[0].offsetHeight;

function moveBall() {

    let radian = alpha * (Math.PI/180);
    let y = ball.style.top.replace("px","");
    let x = ball.style.left.replace("px","");
    y = y*1 - Math.cos(radian)*speed;
    x = x*1 + Math.sin(radian)*speed;
    if (y < 0) {
        alpha = (alpha > 180)? 180-alpha : 180+360-alpha;
    }
    if (y > maxY) {
        alpha = (alpha > 270)? 360-alpha : 180-alpha;
    }
    if (x < 0) {
        alpha = (alpha > 270)? 360-alpha : -alpha;
    }
    if (x > maxX) {
        alpha = (alpha < 90)? 360-alpha : -alpha;
    }
    ball.style.top = y+"px";
    ball.style.left = x+"px";

}

ball.style.top = maxY/2+"px";
ball.style.left = maxX/2+"px";
let ballTimer = setInterval( () => {
    moveBall();
},2);