"use strict";

function responseToDOM(response) {
    console.log(response);

    const nav = document.getElementsByTagName("nav")[0];
    let articleArray = [];
    for (let element of response.response.docs) {
       let article = document.createElement("article");
       let ul = document.createElement("ul");
       let li = [];
       li[0] = document.createElement("li");
       li[1] = document.createElement("li");
       li[2] = document.createElement("li");
       li[0].innerText = element.headline.main;
       li[1].innerText = element.snippet;
       li[2].innerText = element.pub_date;

       article.innerHTML = `<a href=${element.web_url}>${element.headline.main}</a>`;
       article.append(ul);
       ul.append(...li);
       articleArray.push(article);
    }
    nav.append(...articleArray);


}