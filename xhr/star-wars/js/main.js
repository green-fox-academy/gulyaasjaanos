"use strict";

const LINK = "https://swapi.co/api/people/?search=";

const BTN = document.getElementsByTagName("button")[0];

BTN.addEventListener("click", () => {
    let link = LINK + document.forms["search"]["name"].value;
    callXHR(link, (response) => {
        responseToDOM(response);
    });
});

