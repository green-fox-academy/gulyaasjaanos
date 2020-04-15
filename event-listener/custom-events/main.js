'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});

let leftClick =  document.createEvent("MouseEvents");
leftClick.initEvent("left-side-click", true, true);
let rightClick =  document.createEvent("MouseEvents");
rightClick.initEvent("right-side-click", true, true);

myDiv.addEventListener("click", (event) => {
    if ( event.clientX > 200 ) {
        myDiv.dispatchEvent(rightClick);
    } else {
        myDiv.dispatchEvent(leftClick);
    }
});