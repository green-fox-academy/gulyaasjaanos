const body = document.querySelector('body');
const wasteBtn = document.querySelector('button[class~="wastebin"]');
const wasteText = document.querySelector('button[class~="wastebin"] i');
const deleteBtn = document.querySelector('button[class~="delete"]');
const deleteText = document.querySelector('button[class~="delete"] i');
const sureBtn = document.querySelector('button[class~="sure"]');
const sureText = document.querySelector('button[class~="sure"] i');

body.addEventListener("click", (event) => {
    if ( event.target === wasteBtn || event.target === wasteText ) {
        deleteBtn.classList.remove("invisible");
        sureBtn.classList.add("invisible");
    } else if ( event.target === deleteBtn || event.target === deleteText ) {
        sureBtn.classList.remove("invisible");
    } else {
        sureBtn.classList.add("invisible");
        deleteBtn.classList.add("invisible");
    }
});