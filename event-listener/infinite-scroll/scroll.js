const divRnd = Math.floor(Math.random() * 15 + 5);
const body = document.querySelector("body");
const scrollThreshold = 300;

const addDiv = (num,target) => {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        const R = Math.floor(Math.random() * 255 + 0);
        const G = Math.floor(Math.random() * 255 + 0);
        const B = Math.floor(Math.random() * 255 + 0);
        div.style.backgroundColor = `rgb(${R},${G},${B})`;
        if (target === "bottom") {
            body.appendChild(div);
        } else {
            body.insertBefore(div, body.childNodes[0]);
        }
    }
};

addDiv(divRnd,"bottom");

document.addEventListener("scroll", (event) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - scrollThreshold) {
        addDiv(10,"bottom");
    }
    if (window.scrollY <= 0 + scrollThreshold) {
        addDiv(10,"top");
    }
});