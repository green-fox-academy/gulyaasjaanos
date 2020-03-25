"use strict";

function responseToDOM(response) {
    console.log(response);

    const nav = document.getElementsByTagName("nav")[0];
    let imgArray = [];
    for (let i = 0; i < 16; i++) {
       let img = document.createElement("img");
       img.src = response.data[i].images.downsized_still.url;
       img.onclick = (img) => {
            mainImg.src = response.data[i].images.original.url;
       };
       imgArray.push(img);
    }
    nav.append(...imgArray);

    const section = document.getElementsByTagName("section")[0];
    let img = document.createElement("img");
    img.src = response.data[0].images.original.url;
    img.id = "mainImg";
    section.append(img);

}