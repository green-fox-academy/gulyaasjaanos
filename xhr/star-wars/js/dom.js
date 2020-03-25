"use strict";

function responseToDOM(search,response) {
    console.log(response);

    const ul = document.querySelectorAll(`.${search} ul`)[0];
    let liArray = [];
    if (search === "films") {
        let li = document.createElement("li");
        li.innerText = response.title;
        liArray.push(li);
    } else {
        while (ul.firstChild) {
            ul.removeChild(ul.lastChild);
        };
        for (let element of response.results) {
            let li = document.createElement("li");
            li.innerText = element.name;
            li.onclick = () => {
                const ul = document.querySelectorAll(`.films ul`)[0];
                while (ul.firstChild) {
                    ul.removeChild(ul.lastChild);
                };
                element.films.forEach( e => {
                    callXHR(e, (response) => {
                        responseToDOM("films",response);
                    });
                });
            };
            liArray.push(li);
        }
    }
    ul.append(...liArray);

};