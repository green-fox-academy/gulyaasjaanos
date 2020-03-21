"use strict";

let index = 0;
const divs = document.getElementsByTagName("div");
let timer = setInterval( () => {
    if ( index >= divs.length-1 ) {
        clearInterval(timer);
    }
    if ( isPrime(divs[index].innerHTML) ) {
        divs[index].classList.add("prime");
    } else {
        divs[index].classList.add("not-prime");
    }
    index++;
}, 100);