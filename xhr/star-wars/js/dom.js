"use strict";


function removeList(listElement) {
    while (listElement.firstChild) {
        listElement.removeChild(listElement.lastChild);
    };
}

function filmList(response) {
    const ul = document.querySelector(".films ul");
    let li = document.createElement("li");
    li.innerText = response.title;
    ul.append(li);
}

function responseToDOM(response) {
    console.log(response);

    const ul = document.querySelector(".people ul");
    let liArray = [];
    removeList(document.querySelector(".people ul"));
    removeList(document.querySelector(".films ul"));
    for (let element of response.results) {
        let li = document.createElement("li");
        li.innerText = element.name;
        li.onclick = () => {
            removeList(document.querySelector(".films ul"));
            element.films.forEach( e => {
                callXHR(e, (response) => {
                    filmList(response);
                });
            });
        };
        liArray.push(li);
    }
    ul.append(...liArray);

};